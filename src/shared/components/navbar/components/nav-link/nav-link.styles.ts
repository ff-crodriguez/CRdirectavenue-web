import { NavLink as RRDNavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(RRDNavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: underline;
  }

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default { NavLink };
