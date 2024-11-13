import { type FC, type PropsWithChildren } from 'react';

import { LoginContext } from '.';

export const LoginProvider: FC<PropsWithChildren> = ({ children }) => (
  <LoginContext.Provider value={{}}>{children}</LoginContext.Provider>
);
