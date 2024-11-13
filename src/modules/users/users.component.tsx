import { type FC } from 'react';

import { useUsersContext } from '@modules/users/contexts';
import { Box } from '@shared/components';
import { UsersList } from './components';

export const Users: FC = () => {
  const { title } = useUsersContext();

  return (
    <Box padding={4}>
      <h1>{title}</h1>
      <UsersList />
    </Box>
  );
};
