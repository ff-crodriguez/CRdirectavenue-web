import { FormEvent, type FC } from 'react';

import { Button } from '@mui/material';
import { useAuthContext } from '@shared/auth';
import { Box } from '@shared/components';

export const LoginForm: FC = () => {
  const { login } = useAuthContext();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    login(username, password);
  };

  return (
    <form onSubmit={handleLogin}>
      <Box display="flex" flexDirection="column" gap={3}>
        <input name="username" placeholder="Username or Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Button
          type="submit"
          formNoValidate
          size="small"
          sx={{ width: 100, backgroundColor: 'lightblue' }}
          color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
};
