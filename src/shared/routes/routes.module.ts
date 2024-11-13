import { AboutModule } from '@modules/about';
import { HomeModule } from '@modules/home';
import { LoginModule } from '@modules/login';
import { SettingsModule } from '@modules/settings';
import { UsersModule } from '@modules/users';
import { RouteModule } from '@route-modules/index';

export const APP_ROUTE_MODULES: RouteModule[] = [
  LoginModule,
  HomeModule,
  UsersModule,
  AboutModule,
  SettingsModule,
];
