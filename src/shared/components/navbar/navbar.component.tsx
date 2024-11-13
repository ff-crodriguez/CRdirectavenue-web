import { FC } from 'react';
import { useTheme } from 'styled-components';

import { ValidatePermissions } from '@route-modules/components';
import { Permission, useAuthContext } from '@shared/auth';
import { Box } from '@shared/components';
import { ROUTES } from '@shared/routes';
import { NavLink } from './components';
import Styled from './navbar.styles';

export const Navbar: FC = () => {
  const { logout } = useAuthContext();
  const { palette } = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      height={50}
      padding={4}
      backgroundColor={palette.background.paper}>
      <NavLink to={ROUTES.HOME}>Home</NavLink>
      <ValidatePermissions
        permissions={{
          and: [Permission.Authenticated],
          or: [Permission.SuperAdmin, Permission.Admin],
        }}>
        <NavLink to={ROUTES.SETTINGS}>Settings</NavLink>
      </ValidatePermissions>
      <NavLink to={ROUTES.ABOUT}>About</NavLink>
      <Styled.LogOut onClick={logout}>Log Out</Styled.LogOut>
    </Box>
  );
};
