import { useEffect, useMemo, type FC, type PropsWithChildren } from 'react';

import { usePermissions } from '../hooks';
import { Permission } from '../utils';
import { AuthContext } from './auth.context';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { permissions, setPermissions, validatePermissions } = usePermissions();

  const { isAuthenticated, isSuperAdmin, isUser, isAdmin } = useMemo(
    () => ({
      isAuthenticated: permissions.includes(Permission.Authenticated),
      isSuperAdmin: permissions.includes(Permission.SuperAdmin),
      isUser: permissions.includes(Permission.User),
      isAdmin: permissions.includes(Permission.Admin),
    }),
    [permissions],
  );

  useEffect(() => {
    setPermissions([Permission.Authenticated, Permission.SuperAdmin]);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isSuperAdmin,
        isUser,
        isAdmin,
        permissions,
        setPermissions,
        validatePermissions,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
