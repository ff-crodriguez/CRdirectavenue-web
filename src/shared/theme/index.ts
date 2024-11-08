import {
  buttonBaseClasses,
  checkboxClasses,
  createTheme,
  inputBaseClasses,
  inputLabelClasses,
  outlinedInputClasses,
  radioClasses,
  svgIconClasses,
  tabClasses,
  tablePaginationClasses,
} from '@mui/material';

import { type CustomTheme } from './theme.types';

export * from './theme.types';

export const content = {
  secondary: '#fff',
  disabled: '#b3b3b3',
  tertiary: '#4d4d4d',
  primary: '#1a1a1a',
  accent: '#651ff9',
  success: '#2e7d32',
  warning: '#ef6c00',
  error: '#dd2c00',
  info: '#00838f',
  overlayDark: '#4d4d4d66',
};

export const surface = {
  secondary: '#fff',
  primary: '#e6e6e6',
  accent: '#ccc',
  inactiveButton: '#999',
  chat: '#e6e6e6',
  navAccent: '#4b06e0',
  support: '#19024b',
  selected: '#eee6fe',
  warning30: '#FCEAE5',
  accentTertiary: '#e4d8fd',
};

export const theme = createTheme({
  typography: {
    fontFamily: 'Lato, Arial, sans-serif',
  },
  palette: {
    // @ts-expect-error theme content extend
    content,
    surface,
    primary: {
      main: surface.support,
    },
    secondary: {
      main: content.accent,
    },
    text: {
      primary: content.primary,
      secondary: content.tertiary,
    },
    common: {
      white: '#fff',
      black: '#000',
    },
    background: {
      default: surface.primary,
    },
    divider: content.disabled,
    success: {
      main: content.success,
    },
    warning: {
      main: content.warning,
    },
    error: {
      main: content.error,
    },
    info: {
      main: content.info,
    },
    action: {
      disabled: content.secondary,
      disabledBackground: surface.inactiveButton,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: content.primary,
          [`&.${checkboxClasses.checked}`]: {
            [`& .${svgIconClasses.root}`]: {
              color: content.accent,
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: content.primary,
          [`&.${radioClasses.checked}`]: {
            color: content.accent,
            [`& .${svgIconClasses.root}`]: {
              color: content.accent,
            },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: content.primary,
        },
        tooltip: {
          backgroundColor: content.primary,
          color: surface.secondary,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'rgba(101, 31, 249, 0.3)',
        },
        barColorPrimary: {
          backgroundColor: content.accent,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: `0px 2px 1px -1px rgba(0, 0, 0, 0.20), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)`,
          '&:hover': {
            boxShadow: `0px 2px 16px 1px rgba(0, 0, 0, 0.12), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 4px 5px -2px rgba(0, 0, 0, 0.20)`,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: content.primary,
          textTransform: 'capitalize',
          fontSize: '0.75rem',

          [`&.${tabClasses.selected}`]: {
            color: content.accent,
          },
          [`&.${tabClasses.disabled}`]: {
            opacity: 0.4,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: content.accent,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: content.primary,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        endAdornment: {
          [`.${svgIconClasses.root}`]: {
            color: content.primary,
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          [`.${tablePaginationClasses.actions}`]: {
            [`.${buttonBaseClasses.disabled}`]: {
              color: content.disabled,
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          [`& .${inputBaseClasses.root}`]: {
            backgroundColor: content.secondary,
            [`&.${outlinedInputClasses.root}`]: {
              color: content.primary,
              '& .MuiInputBase-input::placeholder': {
                color: content.disabled,
                opacity: 1,
              },
              [`&.${outlinedInputClasses.disabled}`]: {
                '& fieldset': {
                  borderColor: content.disabled,
                },
              },
            },
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: content.disabled,
          [`&.${inputLabelClasses.shrink}`]: {
            color: content.primary,
            [`&.${inputLabelClasses.focused}`]: {
              color: surface.support,
            },
          },
        },
      },
    },
  },
}) as CustomTheme;
