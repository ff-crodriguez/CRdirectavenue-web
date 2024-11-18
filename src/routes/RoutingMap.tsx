import { ComponentType, LazyExoticComponent, lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import createRoute from '../helpers/RoutesHelper';
import Routes from './Routes';

const Home: LazyExoticComponent<ComponentType> = lazy(
  () => import('../pages/home/Home'),
);
const About: LazyExoticComponent<ComponentType> = lazy(
  () => import('../pages/about/About'),
);
const Plan: LazyExoticComponent<ComponentType> = lazy(
  () => import('../pages/plan/Plan'),
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
  const about: Routes = createRoute('/about', <About />);
  const user: Routes = createRoute('/plan/:id', <Plan />);
  return [createRoute('/', <RootLayout />, [home, about, user], <ErrorPage />)];
};

export default RoutingMap;
