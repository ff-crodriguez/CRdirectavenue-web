import { Box, ThemeProvider, Typography } from '@mui/material';
import type { Meta } from '@storybook/react';

import { typography } from '../../shared/theme/Constants';
import customTheme from '../../shared/theme/Theme';

const meta: Meta<typeof Typography> = {
  component: Typography,
  decorators: [
    (Story) => (
      <ThemeProvider theme={customTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const TypographyVariations = () => {
  return (
    <>
      {Object.keys(typography).map((option) => (
        <Box margin="10px" border="1px solid blue" key={option}>
          <Typography variant={option as keyof typeof typography}>
            Typography {option}
          </Typography>
        </Box>
      ))}
    </>
  );
};
