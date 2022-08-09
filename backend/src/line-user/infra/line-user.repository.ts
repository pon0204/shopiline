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
import { StripeService } from '../../stripe/stripe.service';

@Injectable()
export class LineUserRepository implements ILineUserRepository {
  constructor(
    private prisma: PrismaService,
    private lineService: LineService,
    private stripeService: StripeService,
  ) {}
  async create(lineUser: TInitialLineUser): Promise<LineUser> {
    const createLineUser: LineUserDBEntity = await this.prisma.lineUser.create({
      data: {
        lineId: lineUser.lineId,
        lineName: lineUser.lineName,
        lineImage: lineUser.lineImage,
        status: lineUser.status,
        language: lineUser.language,
        statusMessage: lineUser.statusMessage,
        stripeCustomerId: lineUser.stripeCustomerId,
        client: {
          connect: {
            id: lineUser.clientId,
          },
        },
        lineProvider: {
          connect: {
            id: 1,
          },
        },
      },
    });

    return LineUser.reconstruct(createLineUser);
  }

  async fetchLineProfile(lineId: string): Promise<LineProfile> {
    return await this.lineService.getLineProfile(testLineConfig, lineId);
  }

  async createStripeCustomer({
    lineId,
    lineName,
  }: {
    lineId: string;
    lineName: string;
  }): Promise<string> {
    const stripeCustomer = await this.stripeService.createStripeCustomer({
      name: lineName,
      metadata: { lineId },
    });
    return stripeCustomer.id;
  }
}
