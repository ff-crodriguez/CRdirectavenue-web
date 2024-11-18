import { Routes } from '@shared/routing';

import { type INavbarItem } from '../../../utils';

export const NAVBAR_ITEMS: INavbarItem[] = [
  {
    text: 'Home',
    path: Routes.Home,
  },
  {
    text: 'About',
    path: Routes.About,
  },
  {
    text: 'Settings',
    path: Routes.Settings,
  },
];
