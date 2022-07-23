import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateLineUserUsecase {
  handle(lineId: string) {
    return lineId;
    /**
     * [流れ]
     * repository層で、botInfo取得
     * repository層で、でstripeCustomer作成＆取得
     * domainでentity作成
     * repositoryでsave
     */
  }
}
