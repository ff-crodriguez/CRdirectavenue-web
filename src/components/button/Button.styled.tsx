/* eslint-disable react-refresh/only-export-components */
import { css, styled } from '@mui/material';

/**
 * Button styled component based on the theme.
 */
const Button = styled('button')(
  ({ theme }) => css`
    background-color: ${theme.palette.colors.primary.dark};
  `,
);

export default { Button };
