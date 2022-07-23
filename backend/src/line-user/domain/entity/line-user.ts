import { Profile } from './profile';
import { Profile as LineProfile } from '@line/bot-sdk';

export class LineUser {
  readonly id: number | null;
  readonly uuid: string | null;
  readonly lineId: string;
  readonly lineName: string;
  readonly status: string;
  readonly language: string;
  readonly lineImage: string;
  readonly stripeCustomerId: string;
  readonly statusMessage: string;
  readonly profile: Profile | null;

  private constructor({
    id,
    uuid,
    lineId,
    lineName,
    status,
    language,
    lineImage,
    stripeCustomerId,
    statusMessage,
    profile,
  }: {
    id: number | null;
    uuid: string | null;
    lineId: string;
    lineName: string;
    status: string;
    language: string;
    lineImage: string;
    stripeCustomerId: string;
    statusMessage: string;
    profile: Profile | null;
  }) {
    this.id = id;
    this.uuid = uuid;
    this.lineId = lineId;
    this.lineName = lineName;
    this.status = status;
    this.language = language;
    this.lineImage = lineImage;
    this.stripeCustomerId = stripeCustomerId;
    this.statusMessage = statusMessage;
    this.profile = profile;
  }

  static new(lineProfile: LineProfile, stripeCustomerId: string) {
    return new LineUser({
      id: null,
      uuid: null,
      lineId: lineProfile.userId,
      lineName: lineProfile.displayName,
      lineImage: lineProfile.pictureUrl,
      status: 'active',
      language: lineProfile.language ?? 'ja',
      stripeCustomerId,
      statusMessage: lineProfile.statusMessage,
      profile: null,
    });
  }
}

// const lineClient = new Client({
//   channelAccessToken: '',
//   channelSecret: '',
// });
