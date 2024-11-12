import { type Permissions, type RouteModule } from '@route-modules/index';
import { Permission } from '@shared/auth';
import { Navbar } from '@shared/components/navbar/navbar.component';
import { ROUTES } from '@shared/routes';

import { SettingsProvider } from './contexts';
import { Settings } from './settings.component';

const permissions: Permissions = {
  and: [Permission.Authenticated],
  or: [Permission.SuperAdmin, Permission.Admin],
};

export const SettingsModule: RouteModule = {
  name: 'Search',
  routes: [
    {
      path: ROUTES.SETTINGS,
      element: Settings,
      permissions,
    },
  ],
  providers: [
    {
      provider: SettingsProvider,
      permissions,
    },
  ],
  navbarElement: Navbar,
};
