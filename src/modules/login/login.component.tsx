import { type FC } from 'react';

import { Box, Divider } from '@shared/components';
import { LoginForm, LoginHint } from './components';
import Styled from './login.styles';

export const Login: FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    gap={12}
    height="100vh"
    width="100%">
    <Styled.Logo
      src="https://firstfactory.com/wp-content/uploads/dynamik-gen/theme/images/first-factory-logo-270x20.png"
      alt="First Factory"
    />
    <Box display="flex" flexDirection="column" gap={8} width="300px">
      <LoginForm />
      <Divider />
      <LoginHint />
    </Box>
  </Box>
);
