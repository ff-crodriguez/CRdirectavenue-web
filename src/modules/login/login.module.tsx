import { type RouteModule } from '@route-modules/index';
import { ROUTES } from '@shared/routes';
import { LoginProvider } from './contexts/login.provider';
import { Login } from './login.component';

export const LoginModule: RouteModule = {
  name: 'Login',
  routes: [
    {
      path: ROUTES.LOGIN,
      element: Login,
      permissions: [],
    },
  ],
  providers: [
    {
      provider: LoginProvider,
    },
  ],
};
