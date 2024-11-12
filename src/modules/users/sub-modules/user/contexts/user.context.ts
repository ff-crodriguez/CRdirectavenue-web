import { createContext, useContext } from 'react';

interface IUserContextData {
  title: string;
}

export const UserContext = createContext<IUserContextData>({
  title: '',
});

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within an UserProvider');
  }
  return context;
};
