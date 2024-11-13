import { type FC, type PropsWithChildren } from 'react';
import { Outlet, type RouteObject as RRDRouteObject } from 'react-router-dom';

import {
  validatePermissions,
  type ComponentType,
  type ProviderObject,
  type RouteModule,
} from '.';

type CreateProvidersParams = {
  providers?: ProviderObject[];
  userPermissions: string[];
};

type CreateRoutesParams = {
  routeModules: RouteModule[];
  userPermissions: string[];
  errorComponent?: ComponentType;
};

const createProviders =
  ({
    providers = [],
    userPermissions,
  }: CreateProvidersParams): FC<PropsWithChildren> =>
  ({ children }) => {
    if (providers.length) {
      const moduleProviders = providers.filter(({ permissions = [] }) =>
        validatePermissions({
          requiredPermissions: permissions,
          userPermissions,
        }),
      );
      return moduleProviders.reduceRight(
        (children, { provider: Provider }) => <Provider>{children}</Provider>,
        children,
      );
    }
    return children;
  };

export const createRoutes = ({
  routeModules,
  userPermissions,
  errorComponent: ErrorComponent,
}: CreateRoutesParams): RRDRouteObject[] => {
  return routeModules.reduce((routes, routeModule) => {
    const ModuleProviders = createProviders({
      providers: routeModule.providers,
      userPermissions,
    });

    const moduleRoutes = routeModule.routes
      .filter(({ permissions = [] }) =>
        validatePermissions({
          requiredPermissions: permissions,
          userPermissions,
        }),
      )
      .map((route) => {
        const RouteProviders = createProviders({
          providers: route.providers,
          userPermissions,
        });
        return {
          ...route,
          element: (
            <RouteProviders>
              {routeModule.navbarElement && <routeModule.navbarElement />}
              <route.element />
            </RouteProviders>
          ),
          errorElement: route.errorElement && <route.errorElement />,
        };
      });

    return moduleRoutes.length
      ? routes.concat([
          {
            element: (
              <ModuleProviders>
                <Outlet />
              </ModuleProviders>
            ),
            children: moduleRoutes,
            errorElement: ErrorComponent && <ErrorComponent />,
          },
        ])
      : routes;
  }, [] as RRDRouteObject[]);
};
