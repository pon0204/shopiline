import { LineUser } from '../entity/line-user';
// import { Profile } from '../entity/profile';
import { Profile as LineProfile } from '@line/bot-sdk';

// type HasId = { readonly id: number; readonly uuid: string };
// type HasProfile = { readonly profile: Profile };

export type TInitialLineUser = {
  readonly lineId: string;
  readonly lineName: string;
  readonly status: string;
  readonly language: string;
  readonly lineImage: string;
  readonly stripeCustomerId: string;
  readonly statusMessage: string;
};

export abstract class ILineUserRepository {
  abstract create(lineUser: TInitialLineUser): Promise<LineUser>;
  abstract fetchLineProfile(lineId: string): Promise<LineProfile>;
  abstract createStripeCustomer(): Promise<string>;
}
