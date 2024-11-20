import { Typography } from '@mui/material';
import type { Meta } from '@storybook/react';

import { typography } from '../../shared/theme/Constants';
import Styled from './Typography.styled';

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export const TypographyVariations = () => {
  return (
    <>
      {Object.keys(typography).map((option) => {
        return (
          <Styled.Box key={option}>
            <Styled.Typography variant={option as keyof typeof typography}>
              Typography {option}
            </Styled.Typography>
          </Styled.Box>
        );
      })}
    </>
  );
};

export default meta;
