import { RouteModulesProvider } from '@route-modules/index';
import { AuthProvider } from '@shared/auth';
import { theme } from '@shared/theme/index';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { ErrorComponent } from '@shared/components';
import { APP_ROUTE_MODULES } from '@shared/routes';
import { MainStyles } from './main.styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <MainStyles />
      <AuthProvider>
        {({ userPermissions }) => (
          <RouteModulesProvider
            userPermissions={userPermissions}
            routeModules={APP_ROUTE_MODULES}
            errorComponent={ErrorComponent}
          />
        )}
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
