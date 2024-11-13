import { createContext, useContext } from 'react';

interface ILoginContextData {}

export const LoginContext = createContext<ILoginContextData>({});

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLoginContext must be used within an LoginProvider');
  }
  return context;
};
