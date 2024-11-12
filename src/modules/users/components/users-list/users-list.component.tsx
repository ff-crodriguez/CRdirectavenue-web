import { type FC } from 'react';

import { useUsersContext } from '@modules/users/contexts';
import { Link } from '@shared/components';
import { ROUTES } from '@shared/routes';

export const UsersList: FC = () => {
  const { users } = useUsersContext();

  return (
    <ul>
      {users.map(({ id, firstName, lastName, is2FAEnabled }) => (
        <li key={id}>
          <Link to={ROUTES.USER.replace(':id', id)} underline="on-hover">
            {firstName} {lastName}
          </Link>{' '}
          has 2FA {is2FAEnabled ? 'enabled' : 'disabled'}
        </li>
      ))}
    </ul>
  );
};
