import { createContext, useContext } from 'react';

interface IUserPetsContextData {
  title: string;
}

export const UserPetsContext = createContext<IUserPetsContextData>({
  title: '',
});

export const useUserPetsContext = () => {
  const context = useContext(UserPetsContext);
  if (!context) {
    throw new Error(
      'useUserPetsContext must be used within an UserPetsProvider',
    );
  }
  return context;
};
