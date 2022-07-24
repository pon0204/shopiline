import { Injectable } from '@nestjs/common';
import { LineUser } from '../domain/entity/line-user';
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
    return {} as LineUser;
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
