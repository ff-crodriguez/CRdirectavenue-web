interface IShared {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
}

interface IText {
  primary: string;
  secondary: string;
  disabled: string;
}

interface IPrimary extends IShared {
  hover: string;
  hoverText: string;
  pale: string;
}

interface ISecondary extends IShared {
  pale: string;
}

type IError = IShared;

type IWarning = IShared;

type IInfo = IShared;

type ISuccess = IShared;

interface IBackground {
  default: string;
  blueGrey: string;
  darkBlueGrey: string;
  neutralGrey: string;
  lightGrey: string;
  gradient?: string; // TODO: Add gradient once we receive the response from the client
}

interface IDivider {
  divider1: string;
  divider2: string;
  divider3: string;
  divider4: string;
}

interface IFoundational {
  white: string;
  grey1: string;
  grey2: string;
  grey3: string;
  black: string;
}

interface IThemeColors {
  text: IText;
  primary: IPrimary;
  secondary: ISecondary;
  error: IError;
  warning: IWarning;
  info: IInfo;
  success: ISuccess;
  background: IBackground;
  divider: IDivider;
  foundational: IFoundational;
}

export default IThemeColors;