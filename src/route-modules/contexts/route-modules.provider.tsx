import { useMemo, type FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { RouteModulesContext } from '.';
import { createRoutes, type ComponentType, type RouteModule } from '../utils';

type RouteModulesProviderProps = {
  userPermissions: string[];
  routeModules: RouteModule[];
  errorComponent?: ComponentType;
};

export const RouteModulesProvider: FC<RouteModulesProviderProps> = ({
  userPermissions = [],
  routeModules,
  errorComponent,
}) => {
  const router = useMemo(
    () =>
      createBrowserRouter(
        createRoutes({ routeModules, userPermissions, errorComponent }),
      ),
    [routeModules, userPermissions, errorComponent],
  );
  console.log('🚀 ~ router:', router);
  console.log('🚀 ~ userPermissions:', userPermissions);

  return (
    <RouteModulesContext.Provider value={{ userPermissions }}>
      <RouterProvider router={router} />
    </RouteModulesContext.Provider>
  );
};
