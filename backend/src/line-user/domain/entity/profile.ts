export class Profile {
  name: string;
  nameKana: string;
  image: string;
  gender: GENDER;
  birthday: string; // TODO: vojb
  tel: string; // TODO: vojb
  email: string; // TODO: vobj
  address1: string;
  address2: string;
  address3: string;
  postCode: string;
  adminMemo: string;
  userMemo: string;
  lineUserId: number;
}

export enum GENDER {
  MALE,
  FEMALE,
  MEMBER,
}
