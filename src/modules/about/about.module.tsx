import { Permission, type IPermissions } from '@shared/auth';
import { Routes, type RouteModule } from '@shared/routing';

import { About } from './about.component';
import { ProcessingSetDetailsProvider } from './contexts';

const permissions: IPermissions = {
  and: [Permission.Authenticated],
  or: [Permission.SuperAdmin, Permission.Admin],
};

export const AboutModule: RouteModule = {
  name: 'ProcessingSetDetails',
  routes: [
    {
      path: Routes.About,
      element: About,
      permissions,
    },
  ],
  providers: [
    {
      provider: ProcessingSetDetailsProvider,
      permissions,
    },
  ],
  navbarElement: true,
};
