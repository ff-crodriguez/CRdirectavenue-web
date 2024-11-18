import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    colors: {
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
    },
  },
});

export default customTheme;
