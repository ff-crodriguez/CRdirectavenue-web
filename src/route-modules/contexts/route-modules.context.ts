import { createContext, useContext } from 'react';

type RouteModulesContextData = {
  userPermissions: string[];
};

export const RouteModulesContext = createContext<RouteModulesContextData>({
  userPermissions: [],
});

export const useRouteModulesContext = () => {
  const context = useContext(RouteModulesContext);
  if (!context) {
    throw new Error(
      'useRouteModulesContext must be used within a RouteModulesProvider',
    );
  }
  return context;
};
