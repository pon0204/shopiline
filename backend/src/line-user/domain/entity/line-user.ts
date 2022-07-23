import { Profile } from './profile';

export class LineUser {
  id: number;
  uuid: string;
  lineId: string;
  lineName: string;
  status: string; // TODO: enumかvalue-object化
  language: string;
  lineImage: string;
  statusMessag: string;
  profile: Profile;
}
