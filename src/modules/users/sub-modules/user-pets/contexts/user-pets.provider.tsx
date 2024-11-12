import { useState, type FC, type PropsWithChildren } from 'react';

import { UserPetsContext } from '.';

export const UserPetsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [title] = useState('Welcome to the User Pets page');

  return (
    <UserPetsContext.Provider value={{ title }}>
      {children}
    </UserPetsContext.Provider>
  );
};
