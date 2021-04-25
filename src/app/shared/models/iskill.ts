import { IGroup } from './igroup';

export interface ISkill {
  _id: string;
  title: string;
  value: number;
  group: IGroup,
  createdAt: string;
  __v: number;
}
