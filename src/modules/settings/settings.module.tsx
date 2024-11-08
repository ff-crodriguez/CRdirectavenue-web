import { Permission } from '@shared/auth';
import { Routes, type RouteModule } from '@shared/routing';

import { SettingsProvider } from './contexts';
import { Settings } from './settings.component';

export const SettingsModule: RouteModule = {
  name: 'Search',
  routes: [
    {
      path: Routes.Settings,
      element: Settings,
      permissions: [Permission.Authenticated],
    },
  ],
  providers: [
    {
      provider: SettingsProvider,
      permissions: [Permission.SuperAdmin],
    },
  ],
  navbarElement: true,
};
