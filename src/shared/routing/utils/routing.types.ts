import { type IPermissions } from '@shared/auth';
import {
  type ElementType,
  type FC,
  type ComponentType as RComponentType,
} from 'react';
import { type RouteObject as RRDRouteObject } from 'react-router-dom';

export type ComponentType = FC | ElementType | RComponentType;

export type RouteObject = Omit<RRDRouteObject, 'element' | 'errorElement'> & {
  element: ComponentType;
  errorElement?: ComponentType;
  permissions?: IPermissions;
};
export type AuthedProviders = {
  provider: ComponentType;
  permissions?: IPermissions;
  name?: string;
};

export type RouteModule = {
  name: string;
  routes: RouteObject[];
  providers?: AuthedProviders[];
  navbarElement?: RComponentType | boolean;
};
