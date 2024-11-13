import { type Permissions, type RouteObject } from '@route-modules/index';
import { Permission } from '@shared/auth';
import { ROUTES } from '@shared/routes';
import { UserProvider } from './contexts';
import { User } from './user.component';

const permissions: Permissions = {
  and: [Permission.Authenticated],
  or: [Permission.SuperAdmin, Permission.Admin],
};

export const UserSubModule: RouteObject = {
  path: ROUTES.USER,
  element: User,
  permissions,
  providers: [
    {
      provider: UserProvider,
      permissions,
    },
  ],
};
