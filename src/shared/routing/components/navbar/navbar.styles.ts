import styled from 'styled-components';

const Navbar = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.common.white};
  box-sizing: border-box;
  display: flex;
  height: 88px;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export default { Navbar };
