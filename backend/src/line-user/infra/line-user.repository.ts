import { Injectable } from '@nestjs/common';
import { LineUser } from '../domain/entity/line-user';
import { PrismaService } from '../../prisma/prisma.service';
import {
  ILineUserRepository,
  TInitialLineUser,
} from '../domain/interface/line-user.repository';
import { Profile as LineProfile } from '@line/bot-sdk';

@Injectable()
export class LineUserRepository implements ILineUserRepository {
  constructor(private prisma: PrismaService) {}
  async create(lineUser: TInitialLineUser): Promise<LineUser> {
    return {} as LineUser;
  }

  async fetchLineProfile(): Promise<LineProfile> {
    // TODO: MessagingAPIServiceから取得する。
    return {} as LineProfile;
  }

  async createStripeCustomer(): Promise<string> {
    // TODO: stripeAPIServiceから取得する。
    const stripeCustomerId = '';
    return stripeCustomerId;
  }
}
