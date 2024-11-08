import { Permission } from '@shared/auth';

export interface INavbarItem {
  text: string;
  path: string;
  permissions?: Permission[];
  needsDivider?: boolean;
}
