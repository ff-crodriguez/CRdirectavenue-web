/**
 * The `colors` object defines the primary color palette, as well as various other color categories of the application.
 */
const colors = {
  text: {
    primary: '#181818',
    secondary: '#4A4A4A',
    disabled: '#969696',
  },
  primary: {
    main: '#8DC641',
    dark: '#66912C',
    light: '#B4D348',
    pale: '#E7FEC1',
    contrastText: '#181818',
    hover: '#181818',
    hoverText: '#FFFFFF',
  },
  secondary: {
    main: '#2D85C3',
    dark: '#153E5B',
    light: '#62A9DB',
    pale: '#C7DCEA',
    contrastText: '#181818',
  },
  error: {
    main: '#DC3232',
    dark: '#901919',
    light: '#E56767',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#F57C00',
    dark: '#8F3000',
    light: '#F9A719',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#2D85C3',
    dark: '#153E5B',
    light: '#62A9DB',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#66912C',
    dark: '#3C561A',
    light: '#8DC641',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#FFFFFF',
    blueGrey: '#3D5265',
    darkBlueGrey: '#2A3946',
    neutralGrey: '#808991',
    lightGrey: '#F3F2F0',
  },
  divider: {
    divider1: 'rgba(24, 24, 24, 0.12)',
    divider2: 'rgba(24, 24, 24, 0.22)',
    divider3: 'rgba(24, 24, 24, 0.32)',
    divider4: 'rgba(24, 24, 24, 0.42)',
  },
  foundational: {
    white: '#FFFFFF',
    grey1: '#E5E5E5',
    grey2: '#D1D1D1',
    grey3: '#7D7D7D',
    black: '#181818',
  },
};
/**
 * `baseFontFamily` defines the basic font families and letter spacing.
 */
const baseFontFamily = {
  archive: { fontFamily: 'Archivo', letterSpacing: 'normal' },
  lato: { fontFamily: 'Lato', letterSpacing: 'normal' },
};

/**
 * `baseTypography` defines a subset of font families and fontWeight.
 */
const baseTypography = {
  archiveHeading: { ...baseFontFamily.archive, fontWeight: 700 },
  archiveSubtitle: { ...baseFontFamily.archive, fontWeight: 500 },
  archiveSemibold: { ...baseFontFamily.archive, fontWeight: 600 },
  archiveRegular: { ...baseFontFamily.archive, fontWeight: 400 },
  latoRegular: { ...baseFontFamily.lato, fontWeight: 400 },
  latoSemibold: { ...baseFontFamily.lato, fontWeight: 600 },
  latoBold: { ...baseFontFamily.lato, fontWeight: 700 },
};
/**
 * `typography` - Defines the entire application typography.
 */
const typography = {
  h1: { ...baseTypography.archiveHeading, fontSize: 34 },
  h2: { ...baseTypography.archiveHeading, fontSize: 30 },
  h3: { ...baseTypography.archiveHeading, fontSize: 28 },
  h4: { ...baseTypography.archiveHeading, fontSize: 24 },
  subtitle1: { ...baseTypography.archiveSemibold, fontSize: 20 },
  subtitle2: { ...baseTypography.archiveSubtitle, fontSize: 18 },
  subtitle3: { ...baseTypography.archiveSubtitle, fontSize: 16 },
  body: { ...baseTypography.latoRegular, fontSize: 16 },
  bodySemibold: { ...baseTypography.latoSemibold, fontSize: 16 },
  bodyBold: { ...baseTypography.latoBold, fontSize: 16 },
  bodySmall: { ...baseTypography.latoRegular, fontSize: 14 },
  bodySmallSemibold: { ...baseTypography.latoSemibold, fontSize: 14 },
  bodySmallBold: { ...baseTypography.latoBold, fontSize: 14 },
  caption: { ...baseTypography.archiveRegular, fontSize: 12 },
  captionSmall: { ...baseTypography.archiveRegular, fontSize: 11 },
  overline: {
    fontFamily: baseTypography.archiveSubtitle.fontFamily,
    fontSize: 12,
  },
};

export { colors, typography };
