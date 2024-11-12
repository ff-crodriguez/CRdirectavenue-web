import { type Permissions, type RouteObject } from '@route-modules/index';
import { Permission } from '@shared/auth';
import { ROUTES } from '@shared/routes';
import { UserPetsProvider } from './contexts';
import { UserPets } from './user-pets.component';

const permissions: Permissions = {
  and: [Permission.Authenticated],
  or: [Permission.SuperAdmin, Permission.Admin],
};

export const UserPetsSubModule: RouteObject = {
  path: ROUTES.USER_PETS,
  element: UserPets,
  permissions,
  providers: [
    {
      provider: UserPetsProvider,
      permissions,
    },
  ],
};
