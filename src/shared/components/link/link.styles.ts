import { Link as RRDLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IStyledLinkProps {
  $underline?: boolean | 'on-hover';
  $fullWidth?: boolean;
}

const Link = styled(RRDLink)<IStyledLinkProps>`
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
  width: ${({ $fullWidth }) => ($fullWidth ? `100%` : undefined)};

  ${({ $underline }) =>
    typeof $underline === 'boolean' &&
    $underline &&
    css`
      text-decoration: underline;
    `}
  ${({ $underline }) =>
    $underline === 'on-hover' &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `}
`;

export default {
  Link,
};
