import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.palette.error.main};
  font-size: 0.875rem;
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: 0;
`;

export default { ErrorMessage };
