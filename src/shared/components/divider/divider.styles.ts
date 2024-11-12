import styled from 'styled-components';

const Divider = styled.hr`
  border-color: ${({ theme }) => theme.palette.grey[300]};
  border-style: solid;
  border-width: 0px 0px thin;
  flex-shrink: 0;
  margin: ${({ theme }) => theme.spacing(0)};
  width: 100%;
`;

export default { Divider };
