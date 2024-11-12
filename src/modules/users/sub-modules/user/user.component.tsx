import { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { useUsersContext } from '@modules/users/contexts';
import { BackButton, Box, Link } from '@shared/components';
import { ROUTES } from '@shared/routes';
import { useUserContext } from './contexts';

type UserParams = {
  id: string;
};

export const User: FC = () => {
  const { id } = useParams<UserParams>();
  const { title } = useUserContext();
  const { users } = useUsersContext();

  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    throw new Error('User not found');
  }

  return (
    <Box padding={4}>
      <Box display="flex" alignItems="center" gap={8}>
        <h1>{title}</h1>
        <Link to={ROUTES.USER_PETS.replace(':id', foundUser.id)}>
          Go to pets
        </Link>
        <BackButton variant="ghost" />
      </Box>
      <Box display="flex" flexDirection="column">
        <label>First Name: {foundUser.firstName}</label>
        <label>Last Name: {foundUser.lastName}</label>
        <label>2FA Enabled? {foundUser.is2FAEnabled ? 'Yes' : 'No'}</label>
      </Box>
    </Box>
  );
};
