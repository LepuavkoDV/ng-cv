import { ISkill } from './iskill';

export interface IGroup {
  items: ISkill[] | string[],
  _id: string;
  title: string;
  icon: string;
  createdAt: string;
  __v: number;
}
