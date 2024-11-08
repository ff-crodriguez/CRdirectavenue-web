import { type Palette, type Theme } from '@mui/material/styles';

type CustomPalette = Palette & {
  content: {
    secondary: string;
    disabled: string;
    tertiary: string;
    primary: string;
    accent: string;
    overlayDark: string;
  };
  surface: {
    secondary: string;
    primary: string;
    accent: string;
    inactiveButton: string;
    chat: string;
    navAccent: string;
    support: string;
    selected: string;
    warning30: string;
    accentTertiary: string;
  };
};

export type CustomTheme = Theme & {
  palette: CustomPalette;
};
