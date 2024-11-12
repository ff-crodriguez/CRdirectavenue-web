import { createContext, useContext } from 'react';

import { Permission } from '../utils';

interface IAuthContextData {
  isAuthenticated: boolean;
  permissions: Permission[];
  login: (username: string, password: string) => void;
  logout: () => void;
}
export const AuthContext = createContext<IAuthContextData>({
  isAuthenticated: false,
  permissions: [],
  login: () => {},
  logout: () => {},
});

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
