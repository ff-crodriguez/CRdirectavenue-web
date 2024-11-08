import { AboutModule } from '@modules/about';
import { HomeModule } from '@modules/home';
import { LoginModule } from '@modules/login';
import { SettingsModule } from '@modules/settings';

import { type RouteModule } from './utils/routing.types';

export const modules: RouteModule[] = [
  LoginModule,
  AboutModule,
  HomeModule,
  SettingsModule,
];
