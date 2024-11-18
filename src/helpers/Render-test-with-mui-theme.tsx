import { ThemeProvider } from '@mui/material/styles';
import { render } from '@testing-library/react';

import theme from '../shared/theme/Theme';

export const renderWithMuiTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
