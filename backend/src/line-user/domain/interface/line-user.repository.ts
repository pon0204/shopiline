import { LineUser } from '../entity/line-user';
import { Profile } from '../entity/profile';

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
  abstract save(lineUser: LineUser | TInitialLineUser): Promise<LineUser>;
}
