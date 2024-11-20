/* eslint-disable @typescript-eslint/no-empty-object-type */
/**
 * Common properties color schemes.
 */
interface ICommonProps {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
}

/**
 * Text-related color properties.
 */
interface IText {
  primary: string;
  secondary: string;
  disabled: string;
}

/**
 * Primary color properties and also includes the common color props properties.
 */
interface IPrimary extends ICommonProps {
  hover: string;
  hoverText: string;
  pale: string;
}

/**
 * Secondary color properties and also includes the common color props properties.
 */
interface ISecondary extends ICommonProps {
  pale: string;
}

/**
 * Type for error color properties.
 */
type Error = ICommonProps;

/**
 * Type for warning color properties.
 */
type Warning = ICommonProps;

/**
 * Type for info color properties.
 */
type Info = ICommonProps;

/**
 * Type for success color properties.
 */
type Success = ICommonProps;

/**
 *  Background color properties.
 */
interface IBackground {
  default: string;
  blueGrey: string;
  darkBlueGrey: string;
  neutralGrey: string;
  lightGrey: string;
  gradient?: string; // TODO: Add gradient once we receive the response from the client
}

/**
 * Divider color properties.
 */
interface IDivider {
  divider1: string;
  divider2: string;
  divider3: string;
  divider4: string;
}

/**
 * Foundational colors used across the app.
 */
interface IFoundational {
  white: string;
  grey1: string;
  grey2: string;
  grey3: string;
  black: string;
}

/**
 * Interface combining all the color properties used throughout the theme.
 */
export interface IThemeColors {
  text: IText;
  primary: IPrimary;
  secondary: ISecondary;
  error: Error;
  warning: Warning;
  info: Info;
  success: Success;
  background: IBackground;
  divider: IDivider;
  foundational: IFoundational;
}

/**
 * Additional typography variants beyond the standard MUI typography options.
 */
interface IExtraTypographyVariantsOptions {
  subtitle3: React.CSSProperties;
  body: React.CSSProperties;
  bodySemibold: React.CSSProperties;
  bodyBold: React.CSSProperties;
  bodySmall: React.CSSProperties;
  bodySmallSemibold: React.CSSProperties;
  bodySmallBold: React.CSSProperties;
  captionSmall: React.CSSProperties;
}

declare module '@mui/material/styles' {
  /**
   * Palette extending with `colors` property that represents the theme colors.
   */
  interface Palette extends IThemeColors {
    colors: IThemeColors;
  }

  interface PaletteOptions {
    colors: IThemeColors;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides
    extends Record<keyof IExtraTypographyVariantsOptions, true> {}
}
