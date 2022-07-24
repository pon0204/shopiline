import { Injectable } from '@nestjs/common';
import { LineUser } from '../domain/entity/line-user';
import { LineUser as LineUserDBEntity } from 'prisma/prisma-client';
import { PrismaService } from '../../prisma/prisma.service';
import {
  ILineUserRepository,
  TInitialLineUser,
} from '../domain/interface/line-user.repository';
import { Profile as LineProfile } from '@line/bot-sdk';
import { testLineConfig, LineService } from 'src/line/line.service';

@Injectable()
export class LineUserRepository implements ILineUserRepository {
  constructor(
    private prisma: PrismaService,
    private lineService: LineService,
  ) {}
  async create(lineUser: TInitialLineUser): Promise<LineUser> {
    const createLineUser: LineUserDBEntity = await this.prisma.lineUser.create({
      data: {
        clientId: lineUser.clientId,
        lineId: lineUser.lineId,
        lineName: lineUser.lineName,
        lineImage: lineUser.lineImage,
        status: lineUser.status,
        language: lineUser.language,
        statusMessage: lineUser.statusMessage,
        stripeCustomerId: lineUser.stripeCustomerId,
      },
    });

    return LineUser.reconstruct(createLineUser);
  }

  async fetchLineProfile(lineId: string): Promise<LineProfile> {
    return this.lineService.getLineProfile(testLineConfig, lineId);
  }

  async createStripeCustomer(): Promise<string> {
    // TODO: stripeAPIServiceから取得する。
    const stripeCustomerId = '';
    return stripeCustomerId;
  }
}
