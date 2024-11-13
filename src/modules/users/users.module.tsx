import { type Permissions, type RouteModule } from '@route-modules/index';
import { Permission } from '@shared/auth';
import { Navbar } from '@shared/components';
import { ROUTES } from '@shared/routes';
import { UsersProvider } from './contexts';
import { UserPetsSubModule, UserSubModule } from './sub-modules';
import { Users } from './users.component';

const permissions: Permissions = {
  and: [Permission.Authenticated],
  or: [Permission.SuperAdmin, Permission.Admin],
};

export const UsersModule: RouteModule = {
  name: 'Users',
  routes: [
    {
      path: ROUTES.USERS,
      element: Users,
      permissions,
    },
    UserSubModule,
    UserPetsSubModule,
  ],
  providers: [
    {
      provider: UsersProvider,
      permissions,
    },
  ],
  navbarElement: Navbar,
};
