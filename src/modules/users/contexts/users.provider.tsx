import { useState, type FC, type PropsWithChildren } from 'react';

import { type IUser } from '@shared/types';
import { UsersContext } from '.';

export const UsersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [title] = useState('Welcome to the Users page');
  const [users] = useState<IUser[]>([
    {
      id: '123-abc',
      firstName: 'John',
      lastName: 'Doe',
      is2FAEnabled: false,
      pets: [],
    },
    {
      id: '456-def',
      firstName: 'Keanu',
      lastName: 'Reaves',
      is2FAEnabled: true,
      pets: ['Jack'],
    },
  ]);

  return (
    <UsersContext.Provider
      value={{
        title,
        users,
      }}>
      {children}
    </UsersContext.Provider>
  );
};
