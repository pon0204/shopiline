import { Injectable } from '@nestjs/common';
import { LineUser } from '../domain/entity/line-user';
import { PrismaService } from '../../prisma/prisma.service';
import {
  ILineUserRepository,
  TInitialLineUser,
} from '../domain/interface/line-user.repository';

@Injectable()
export class LineUserRepository implements ILineUserRepository {
  constructor(private prisma: PrismaService) {}
  async create(lineUser: TInitialLineUser): Promise<LineUser> {
    return {} as LineUser;
  }
}
