import { createGlobalStyle } from 'styled-components';

export const MainStyles = createGlobalStyle`
  :root {
    font-family: Lato, Arial, sans-serif;
    line-height: 1.5;
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.background.default};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html, body, #root {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
