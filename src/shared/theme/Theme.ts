import { createTheme } from '@mui/material/styles';

import { colors, typography } from './Constants';

const customTheme = createTheme({
  palette: { colors },
  typography,
});

export default customTheme;
