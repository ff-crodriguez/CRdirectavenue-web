import { useState, type FC, type PropsWithChildren } from 'react';

import { UserContext } from '.';

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [title] = useState('Welcome to the User page');

  return (
    <UserContext.Provider value={{ title }}>{children}</UserContext.Provider>
  );
};
