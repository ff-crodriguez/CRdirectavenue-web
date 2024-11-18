import { ThemeProvider } from '@mui/material';
import type { Router as RemixRouter } from '@remix-run/router';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import logo from './assets/images/directAvenue.webp';
import RoutingMap from './routes/RoutingMap';
import customTheme from './shared/theme/Theme';

/**
 * This router is used to render the correct page or component based on the current URL.
 */
const router: RemixRouter = createBrowserRouter(RoutingMap());

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Suspense fallback={<div>Cargando...</div>}>
        <div id="imageContainer">
          <img loading="lazy" src={logo} alt="Logo" />
        </div>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
