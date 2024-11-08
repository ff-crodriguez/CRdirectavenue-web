import { Menu, Typography } from '@mui/material';
import { useAuth } from '@shared/auth';
import { Routes } from '@shared/routing';
import { useState, type FC, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Icon, NavLink } from './components';
import Styled from './navbar-menu.styles';
import { NAVBAR_ITEMS } from './utils';

export const NavbarMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);
  const { permissions } = useAuth();
  const location = useLocation();

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const isSearchRoute = [Routes.Home, Routes.Home, Routes.Settings].includes(
    location.pathname,
  );

  return (
    <>
      <Icon name="menu" onClick={handleOpen} color="secondary" />
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          sx: { minWidth: 320 },
        }}>
        {NAVBAR_ITEMS.map(({ text, path, needsDivider, ...rest }) => {
          const isVisible =
            rest.permissions?.every((permission) =>
              permissions.includes(permission),
            ) ?? true;

          const shouldBeActive = text === 'Search' && isSearchRoute;

          return [
            isVisible && (
              <Styled.MenuItem onClick={handleClose}>
                <NavLink to={path}>
                  <Typography
                    fontWeight={shouldBeActive ? 'bold' : undefined}
                    variant="body2"
                    component="span"
                    lineHeight={1.429}>
                    {text}
                  </Typography>
                </NavLink>
              </Styled.MenuItem>
            ),
            needsDivider && <Styled.Divider />,
          ];
        })}
        <Styled.MenuItem onClick={handleClose}>
          <Link to={Routes.Home} onClick={() => {}}>
            <Typography variant="body2" component="span" lineHeight={1.429}>
              Log Out
            </Typography>
          </Link>
        </Styled.MenuItem>
      </Menu>
    </>
  );
};
