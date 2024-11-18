import { AuthProvider } from '@shared/auth';
import { RouteModuleProvider } from '@shared/routing';
import { theme } from '@shared/theme';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { MainStyles } from './main.styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <MainStyles />
      <AuthProvider>
        <RouteModuleProvider />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
