import { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { useUsersContext } from '@modules/users/contexts';
import { BackButton, Box } from '@shared/components';
import { useUserPetsContext } from './contexts';

type UserParams = {
  id: string;
};

export const UserPets: FC = () => {
  const { id } = useParams<UserParams>();
  const { title } = useUserPetsContext();
  const { users } = useUsersContext();

  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    throw new Error('User not found');
  }

  return (
    <Box padding={4}>
      <Box display="flex" alignItems="center" gap={8}>
        <h1>{title}</h1>
        <BackButton variant="ghost" />
      </Box>
      <Box display="flex" flexDirection="column">
        <h3>
          {foundUser.firstName} {foundUser.lastName}&#39; pets
        </h3>
        {foundUser.pets.length ? (
          <ul>
            {foundUser.pets.map((pet, index) => (
              <li key={index}>{pet}</li>
            ))}
          </ul>
        ) : (
          <label>The user does not have pets</label>
        )}
      </Box>
    </Box>
  );
};
