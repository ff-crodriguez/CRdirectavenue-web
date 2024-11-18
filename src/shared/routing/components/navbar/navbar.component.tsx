import logo from '@assets/images/directAvenue.webp';
import { Box, Divider } from '@mui/material';
import { createElement, type ComponentType, type FC } from 'react';

import { NavbarMenu } from './components';
import Styled from './navbar.styles';

interface INavbarProps {
  rightNavbar: ComponentType | boolean;
  hideOrganization?: boolean;
}

export const NavbarComponent: FC<INavbarProps> = ({
  rightNavbar,
  hideOrganization,
}) => {
  return (
    <Styled.Navbar>
      <Box display="flex" alignItems="center" gap={4}>
        <Box display="flex" alignItems="center" gap={2}>
          <NavbarMenu />

          <Box
            display="flex"
            gap={2}
            alignItems="center"
            justifyContent="center">
            <img loading="lazy" src={logo} alt="Logo" width={40}></img>
          </Box>
        </Box>
        {!hideOrganization && (
          <>
            <Divider orientation="vertical" flexItem />
          </>
        )}
      </Box>
      {typeof rightNavbar !== 'boolean' && createElement(rightNavbar)}
    </Styled.Navbar>
  );
};
