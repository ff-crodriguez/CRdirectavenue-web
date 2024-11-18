import { css, styled } from '@mui/material';

const Button = styled('button')(
  ({ theme }) => css`
    background-color: ${theme.palette.colors.primary.dark};
  `,
);

export default {
  Button,
};
