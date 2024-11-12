import { type FC, type MouseEventHandler, type PropsWithChildren } from 'react';

import Styled from './nav-link.styles';

interface INavLinkProps extends PropsWithChildren {
  to: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const NavLink: FC<INavLinkProps> = ({ children, ...rest }) => (
  <Styled.NavLink {...rest}>{children}</Styled.NavLink>
);
