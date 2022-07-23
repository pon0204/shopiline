import { LineUser } from '../entity/line-user';

export abstract class ILineUserRepository {
  abstract save(lineUser: LineUser): Promise<LineUser>;
}
