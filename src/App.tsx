import type { Router as RemixRouter } from '@remix-run/router';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import logo from './assets/images/directAvenue.webp';
import RoutingMap from './routes/RoutingMap';

/**
 * This router is used to render the correct page or component based on the current URL.
 */
const router: RemixRouter = createBrowserRouter(RoutingMap());

function App() {
  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <div id="imageContainer">
          <img loading="lazy" src={logo} alt="Logo"></img>
        </div>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
