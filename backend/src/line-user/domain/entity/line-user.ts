import { Profile } from './profile';
import { Profile as LineProfile } from '@line/bot-sdk';
import { TInitialLineUser } from '../interface/line-user.repository';

export class LineUser {
  readonly id: number;
  readonly uuid: string;
  readonly lineId: string;
  readonly lineName: string;
  readonly status: string;
  readonly language: string;
  readonly lineImage: string;
  readonly stripeCustomerId: string;
  readonly statusMessage: string;
  readonly profile: Profile;

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
    id: number;
    uuid: string;
    lineId: string;
    lineName: string;
    status: string;
    language: string;
    lineImage: string;
    stripeCustomerId: string;
    statusMessage: string;
    profile: Profile;
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

  static new(
    lineProfile: LineProfile,
    stripeCustomerId: string,
  ): TInitialLineUser {
    return {
      lineId: lineProfile.userId,
      lineName: lineProfile.displayName,
      lineImage: lineProfile.pictureUrl,
      status: 'active',
      language: lineProfile?.language ?? 'ja',
      stripeCustomerId,
      statusMessage: lineProfile.statusMessage,
    };
  }
}
