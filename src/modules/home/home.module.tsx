import { Permission } from '@shared/auth';
import { RouteModule, Routes } from '@shared/routing';

import { HomeProvider } from './contexts';
import { Home } from './home.component';

export const HomeModule: RouteModule = {
  name: 'Home',
  routes: [
    {
      path: Routes.Home,
      element: Home,
      permissions: [Permission.Authenticated],
    },
  ],
  providers: [
    {
      provider: HomeProvider,
      permissions: [Permission.Authenticated],
    },
  ],

  navbarElement: true,
};
