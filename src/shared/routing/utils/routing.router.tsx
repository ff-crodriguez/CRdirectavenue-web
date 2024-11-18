import { useAuth, type ValidatePermissionsFN } from '@shared/auth';
import {
  AuthedProviders,
  ErrorComponent,
  modules,
  NavbarComponent,
  type RouteModule,
} from '@shared/routing';
import { useMemo, type FC, type PropsWithChildren } from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  type RouteObject as RRDRouteObject,
} from 'react-router-dom';

const createProviders =
  (
    providers: AuthedProviders[] = [],
    validatePermissions: ValidatePermissionsFN,
  ): FC<PropsWithChildren> =>
  ({ children }) => {
    if (providers.length) {
      const moduleProviders = providers.filter(({ permissions = [] }) =>
        validatePermissions(permissions),
      );
      return moduleProviders.reduceRight(
        (children, { provider: Provider }) => <Provider>{children}</Provider>,
        children,
      );
    }
    return children;
  };

const createRoutes = (
  modules: RouteModule[],
  validatePermissions: ValidatePermissionsFN,
): RRDRouteObject[] => {
  return modules.reduce((routes, module) => {
    const moduleRoutes = module.routes
      .filter(({ permissions = [] }) => validatePermissions(permissions))
      .map((route) => {
        const Providers = createProviders(
          module.providers,
          validatePermissions,
        );
        return {
          ...(route as RRDRouteObject),
          element: (
            <Providers>
              {module.navbarElement && (
                <NavbarComponent rightNavbar={module.navbarElement} />
              )}
              <route.element />
            </Providers>
          ),
          errorElement: <ErrorComponent />,
        };
      });

    return moduleRoutes.length
      ? routes.concat([
          {
            element: <Outlet />,
            children: moduleRoutes,
            errorElement: <ErrorComponent />,
          },
        ])
      : routes;
  }, [] as RRDRouteObject[]);
};

export const RouteModuleProvider: FC<PropsWithChildren> = () => {
  const { validatePermissions } = useAuth();
  const router = useMemo(
    () => createBrowserRouter(createRoutes(modules, validatePermissions)),
    [validatePermissions],
  );
  return <RouterProvider router={router} />;
};
