import { ReactNode } from 'react';
import { IndexRouteObject, NonIndexRouteObject, RouteObject } from 'react-router-dom';
import Routes from '../routes/Routes';

/**
 * Helper function to create a CoreRoute instance.
 * @param path - The URL path for the route.
 * @param element - The React node to render for this route.
 * @returns A new instance of CoreRoute.
 */
const createRoute = (path: string, element: ReactNode, children: RouteObject[] = [], errorElement: ReactNode = null): IndexRouteObject | NonIndexRouteObject => {
    return new Routes(path, element, children, errorElement);
};

export default createRoute;