import { type RouteModule } from '@route-modules/index';
import { Permission } from '@shared/auth';
import { Navbar } from '@shared/components/navbar/navbar.component';
import { ROUTES } from '@shared/routes';
import { HomeProvider } from './contexts';
import { Home } from './home.component';

export const HomeModule: RouteModule = {
  name: 'Home',
  routes: [
    {
      path: ROUTES.HOME,
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
  navbarElement: Navbar,
};
