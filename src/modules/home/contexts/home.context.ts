import { createContext, useContext } from 'react';

interface IHomeContextData {
  title: string;
}

export const HomeContext = createContext<IHomeContextData>({
  title: 'Home',
});

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error('useHomeContext must be used within a HomeProvider');
  }
  return context;
};
