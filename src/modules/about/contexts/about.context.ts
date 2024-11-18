import { createContext, useContext } from 'react';

interface IAboutContextData {
  title: string;
}

export const AboutContext = createContext<IAboutContextData>({
  title: '',
});

export const useAboutContext = () => {
  const context = useContext(AboutContext);
  if (!context) {
    throw new Error('useAboutContext must be used within a AboutProvider');
  }
  return context;
};
