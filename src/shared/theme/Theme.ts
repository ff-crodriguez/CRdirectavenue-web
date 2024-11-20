import { createTheme } from '@mui/material/styles';

import { colors, typography } from './Constants';

/**
 * `CustomTheme` Custom theme configuration for Material-UI (MUI) that combines a custom color palette and typography settings.
 */
const customTheme = createTheme({
  palette: { colors },
  typography,
});

export default customTheme;
