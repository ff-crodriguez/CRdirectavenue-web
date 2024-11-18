import { Routes, type RouteModule } from '@shared/routing';

import { LoginProvider } from './contexts';
import { Login } from './login.component';

export const LoginModule: RouteModule = {
  name: 'Login',
  routes: [
    {
      path: Routes.Home,
      element: Login,
      permissions: [],
    },
    {
      path: Routes.Login,
      element: Login,
      permissions: [],
    },
  ],
  providers: [
    {
      provider: LoginProvider,
      permissions: [],
    },
  ],
};
