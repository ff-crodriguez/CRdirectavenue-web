export enum Permission {
  Authenticated = 'authenticated',
  SuperAdmin = 'super_admin',
  Admin = 'admin',
  User = 'user',
  OrganizationNeeded = 'organizationNeeded',
  TwoFactorAuthNeeded = 'twoFactorAuthNeeded',
}

export enum Role {
  User = '0',
  Admin = '1',
  SuperAdmin = '2',
}

export interface IUserInfo {
  adminCheck: string;
  firstName: string;
  lastName: string;
  username: string;
  is2FAEnabled: boolean;
}

export interface I2FAResponse {
  status: string;
  challenge_id: string;
}

export interface ILoginResponse {
  token: string;
  userInfo: IUserInfo[];
}

export interface IDecodedToken {
  adminCheck: string;
  exp: number;
  iat: number;
  orgId: string;
  userName: string;
}

export interface IUserValidated {
  token: string;
  userInfo: IUserInfo;
}

export interface IVerify2FACodeProps {
  challenge_id?: string;
  securityCode: number;
  userName: string;
}

export type IPermissions =
  | Permission[]
  | {
      and?: Permission[];
      or?: Permission[];
    };

export type ValidatePermissionsFN = (
  requiredPermissions: IPermissions,
  debug?: string,
) => boolean;

export interface IPythonLoginProps {
  username: string;
  password: string;
}

export interface IPythonLoginResponse {
  access_token: string;
}

export interface IDoubleLoginResponse {
  jsResponse: ILoginResponse;
  pyResponse: IPythonLoginResponse;
}
