import { createContext, useContext } from 'react';

interface IHomeContextData {
  companyName: string;
}

export const HomeContext = createContext<IHomeContextData>({
  companyName: '',
});

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error('useHomeContext must be used within an HomeProvider');
  }
  return context;
};
