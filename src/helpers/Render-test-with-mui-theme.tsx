import { ThemeProvider } from '@mui/material/styles';
import { render } from '@testing-library/react';

import theme from '../shared/theme/Theme';

/**
 * Renders a React component with Material-UI's `ThemeProvider` wrapped to apply the theme.
 * @param {React.ReactElement} component - Component to be render with theme
 * @returns {React.ReactElement} The rendered component wrapped in a `ThemeProvider`
 */
export const renderWithMuiTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
