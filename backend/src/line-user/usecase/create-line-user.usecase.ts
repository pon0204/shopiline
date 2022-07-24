import { Injectable } from '@nestjs/common';
import { LineUserRepository } from '../infra/line-user.repository';
import { TInitialLineUser } from '../domain/interface/line-user.repository';
import { LineUser } from '../domain/entity/line-user';
import { Profile } from '@line/bot-sdk';

@Injectable()
export class CreateLineUserUsecase {
  constructor(private lineUserRepository: LineUserRepository) {}
  async handle(lineId: string): Promise<LineUser> {
    /**
     * [流れ]
     * repository層で、botInfo取得
     * repository層で、でstripeCustomer作成＆取得
     * domainでentity作成
     * repositoryでsave
     */
    const lineProfile = {} as Profile;
    const stripeCustomerId = 'stripeCustomerId';
    const lineUser = LineUser.new(lineProfile, stripeCustomerId);
    return await this.lineUserRepository.create(lineUser);
  }
}
