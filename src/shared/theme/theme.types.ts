import { type Palette, type Theme } from '@mui/material/styles';

export type FontWeights = {
  bold: number;
  regular: number;
  light: number;
  thin: number;
};

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

type Color = {
  light: string;
  main: string;
  dark: string;
};

export type Colors = {
  primary: Color;
  secondary: Color;
  text: {
    primary: string;
    secondary: string;
  };
  common: {
    white: string;
    black: string;
  };
  background: {
    default: string;
    card: string;
    backdrop: string;
  };
  skeleton: {
    light: string;
    main: string;
  };
  grey: Color;
  border: string;
  success: Color;
  warning: Color;
  error: Color;
  info: Color;
};

export type CustomTheme = Theme & {
  colors: Colors;
};
