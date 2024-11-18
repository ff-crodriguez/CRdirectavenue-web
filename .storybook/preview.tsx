import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Preview, StoryFn } from '@storybook/react';
// eslint-disable-next-line prettier/prettier
import React from 'react';

import theme from '../src/shared/theme/Theme';

export const decorators = [
  (Story: StoryFn) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
