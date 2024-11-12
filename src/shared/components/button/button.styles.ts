import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  $variant: 'primary' | 'ghost';
}

const Button = styled.button<IStyledButtonProps>`
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: ${({ theme }) => theme.spacing(2.5, 4)};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.common.white};

      &:hover,
      &:focus {
        background-color: ${theme.palette.primary.dark};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'ghost' &&
    css`
      background-color: ${theme.palette.grey[300]};
      color: ${theme.palette.common.black};

      &:hover,
      &:focus {
        background-color: ${theme.palette.grey[500]};
      }
    `}
`;

export default {
  Button,
};
