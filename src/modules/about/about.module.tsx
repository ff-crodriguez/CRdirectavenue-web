import { type Permissions, type RouteModule } from '@route-modules/index';
import { Permission } from '@shared/auth';
import { Navbar } from '@shared/components/navbar/navbar.component';
import { ROUTES } from '@shared/routes';
import { About } from './about.component';
import { AboutProvider } from './contexts';

const permissions: Permissions = {
  and: [Permission.Authenticated],
  or: [Permission.User, Permission.SuperAdmin, Permission.Admin],
};

export const AboutModule: RouteModule = {
  name: 'About',
  routes: [
    {
      path: ROUTES.ABOUT,
      element: About,
      permissions,
    },
  ],
  providers: [
    {
      provider: AboutProvider,
      permissions,
    },
  ],
  navbarElement: Navbar,
};
