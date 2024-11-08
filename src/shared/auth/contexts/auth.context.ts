import { Permission, ValidatePermissionsFN } from '@shared/auth';
import { SetValue } from '@shared/hooks';
import { createContext, useContext } from 'react';

interface AuthContextValue {
  isAuthenticated: boolean;
  isSuperAdmin: boolean;
  isUser: boolean;
  isAdmin: boolean;
  permissions: Permission[];
  setPermissions: SetValue<Permission[]>;
  validatePermissions: ValidatePermissionsFN;
}
export const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  isSuperAdmin: false,
  isUser: false,
  isAdmin: false,
  permissions: [],
  setPermissions: () => [],
  validatePermissions: () => false,
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
