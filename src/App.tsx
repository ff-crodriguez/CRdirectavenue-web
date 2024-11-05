import { Suspense } from 'react'
import './App.css'
import type { Router as RemixRouter } from "@remix-run/router";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RoutingMap from './routes/RoutingMap';
import logo from './assets/images/directAvenue.webp';


/**
 * This router is used to render the correct page or component based on the current URL.
 */
const router: RemixRouter = createBrowserRouter(RoutingMap());


function App() {

  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <div id="imageContainer">
          <img loading='lazy' src={logo} alt='Logo'></img>
        </div>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App
