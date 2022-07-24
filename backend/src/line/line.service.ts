import { Client } from '@line/bot-sdk';
import { Injectable } from '@nestjs/common';

// TODO: データベース作成＆ドメイン作成
export const testLineConfig = {
  channelAccessToken: process.env.TEST_LINE_ACCESS_TOKEN || '',
  channelSecret: process.env.TEST_LINE_SECRET_KEY || '',
};
export const testLineUserId = process.env.TEST_LINE_USER_ID || '';

export type TLineConfig = {
  channelAccessToken: string;
  channelSecret: string;
};

@Injectable()
export class LineService {
  async getLineProfile(lineConfig: TLineConfig, lineId: string) {
    const lineClient = this.newLineClient(lineConfig);
    return await lineClient.getProfile(lineId);
  }

  private newLineClient(lineConfig: TLineConfig): Client {
    return new Client(lineConfig);
  }
}
