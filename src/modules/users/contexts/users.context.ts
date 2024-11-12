import { createContext, useContext } from 'react';

import { type IUser } from '@shared/types';

interface IUsersContextData {
  title: string;
  users: IUser[];
}

export const UsersContext = createContext<IUsersContextData>({
  title: '',
  users: [],
});

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUsersContext must be used within an UsersProvider');
  }
  return context;
};
