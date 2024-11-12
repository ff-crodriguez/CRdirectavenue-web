import { useCallback, type FC, type ReactNode } from 'react';

import { useLocalStorage } from '@shared/hooks';
import { AuthContext } from '.';
import { Permission } from '../utils';

type RenderCallback = (params: { userPermissions: string[] }) => ReactNode;

interface IAuthProviderProps {
  children: ReactNode | RenderCallback;
}

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(
    'is-authenticated',
    false,
  );
  const [permissions, setPermissions] = useLocalStorage<Permission[]>(
    'permissions',
    [],
  );

  const login = useCallback(
    (username: string, password: string) => {
      console.log('🚀 ~ password:', password);
      console.log('🚀 ~ username:', username);

      if (
        !(
          ['super-admin', 'admin', 'user'].includes(username) &&
          password === 'pass'
        )
      ) {
        setIsAuthenticated(false);
        throw new Error('Invalid username or password');
      }

      setIsAuthenticated(true);
      setPermissions([
        Permission.Authenticated,
        ...(username === 'super-admin' ? [Permission.SuperAdmin] : []),
        ...(username === 'admin' ? [Permission.Admin] : []),
        ...(username === 'user' ? [Permission.User] : []),
      ]);
    },
    [setIsAuthenticated, setPermissions],
  );

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setPermissions([]);
  }, [setIsAuthenticated, setPermissions]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        permissions,
        login,
        logout,
      }}>
      {children instanceof Function
        ? children({ userPermissions: permissions })
        : children}
    </AuthContext.Provider>
  );
};
