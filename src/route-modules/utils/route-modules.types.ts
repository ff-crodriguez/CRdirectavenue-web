import {
  type ElementType,
  type FC,
  type ComponentType as RComponentType,
} from 'react';

export type Permissions =
  | string[]
  | {
      and?: string[];
      or?: string[];
    };

export type ComponentType = FC | ElementType | RComponentType;

export type ProviderObject = {
  name?: string;
  provider: ComponentType;
  permissions?: Permissions;
};

export type RouteObject = {
  path: string;
  element: ComponentType;
  errorElement?: ComponentType;
  permissions?: Permissions;
  providers?: ProviderObject[];
};

export type RouteModule = {
  name: string;
  routes: RouteObject[];
  providers?: ProviderObject[];
  navbarElement?: ComponentType;
};

export type ValidateArrayOfPermissionsParams = {
  requiredPermissions: string[];
  userPermissions: string[];
  operator: 'and' | 'or';
};

export type ValidatePermissionsParams = {
  requiredPermissions: Permissions;
  userPermissions: string[];
};
