import { Injectable } from '@nestjs/common';
import { LineUserRepository } from '../infra/line-user.repository';
import { LineUser } from '../domain/entity/line-user';
import { testLineUserId } from 'src/line/line.service';

@Injectable()
export class CreateLineUserUsecase {
  constructor(private lineUserRepository: LineUserRepository) {}
  async handle(lineId: string, clientId: number): Promise<LineUser> {
    const lineProfile = await this.lineUserRepository.fetchLineProfile(
      testLineUserId,
    );
    const stripeCustomerId = await this.lineUserRepository.createStripeCustomer(
      { lineId: lineProfile.userId, lineName: lineProfile.displayName },
    );
    const lineUser = LineUser.new(lineProfile, clientId, stripeCustomerId);
    return await this.lineUserRepository.create(lineUser);
  }
}
