import { type FC, type PropsWithChildren } from 'react';

import { LoginContext } from '.';

export const LoginProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LoginContext.Provider
      value={{
        title: 'Login',
      }}>
      {children}
    </LoginContext.Provider>
  );
};
