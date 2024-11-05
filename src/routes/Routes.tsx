import { ReactNode } from "react";
import { NonIndexRouteObject, RouteObject } from "react-router-dom";

/**
 * This class is used to structure and manage the routing configuration for the application.
 * It allows defining routes with a specific path and component to render, along with optional 
 * nested child routes and an error boundary element to handle rendering errors.
 */
class Routes implements NonIndexRouteObject {
    /**
     * The URL path associated with the route.
     */
    path?: string;

    /**
     * A list of child routes nested under this route.
     */
    children?: RouteObject[];

    /**
     * The React node (component) that should be rendered when the route is matched.
     */
    element?: ReactNode;

    /**
     * An optional React node used for rendering error messages or handling route errors.
     */
    errorElement?: React.ReactNode | null;

    /**
     * Initializes a new route with the specified parameters: `path`, `element`, optional `children`, 
     * and an optional `errorElement` for error handling.
     * 
     * @param path - The URL path that will trigger this route.
     * @param element - The React element (component) to render when the route is matched.
     * @param children - An optional array of nested routes that are children of this route.
     * @param errorElement - An optional React node to render in case of an error (default is null).
     */
    constructor(path: string, element: ReactNode, children: RouteObject[] = [], errorElement: React.ReactNode = null) {
        this.path = path;
        this.element = element;
        this.children = children;
        this.errorElement = errorElement;
    }
}

export default Routes;