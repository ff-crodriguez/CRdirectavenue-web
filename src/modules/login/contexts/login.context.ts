import { createContext, useContext } from 'react';

interface ILoginContextData {
  title: string;
}

export const LoginContext = createContext<ILoginContextData>({
  title: '',
});

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLoginContext must be used within a LoginProvider');
  }
  return context;
};
