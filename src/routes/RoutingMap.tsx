import { ComponentType, LazyExoticComponent, lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import createRoute from '../helpers/RoutesHelper';
import Routes from './Routes';

const Home: LazyExoticComponent<ComponentType> = lazy(
  () => import('../pages/home/Home'),
);
const RootLayout: LazyExoticComponent<ComponentType> = lazy(
  () => import('../layouts/RootLayout'),
);
const ErrorPage: LazyExoticComponent<ComponentType> = lazy(
  () => import('../pages/erroPage/ErrorPage'),
);

/**
 * Creates an application routing map.
 * @returns A routeObject array representing the application's routes.
 */
const RoutingMap = (): RouteObject[] => {
  const home: Routes = createRoute('/', <Home />);
  return [createRoute('/', <RootLayout />, [home], <ErrorPage />)];
};

export default RoutingMap;
