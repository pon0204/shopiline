import { Injectable } from '@nestjs/common';
import { LineUser } from '../domain/entity/line-user';

@Injectable()
export class LineUserRepository {
  async save(lineUser: LineUser) {}
}
