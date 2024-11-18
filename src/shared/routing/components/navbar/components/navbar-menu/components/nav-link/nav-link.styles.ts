import { NavLink as RRDNavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(RRDNavLink)`
  text-decoration: none;
  width: 100%;
  color: ${({ theme }) => theme.palette.text.primary};

  &.active {
    > span {
      font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    }
  }
`;

export default { NavLink };
