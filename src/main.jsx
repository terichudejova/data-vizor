import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Prices from "./pages/Prices.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/data-vizor/",
    element: <App />,
    children: [
      {
        path: "/data-vizor/",
        element: <Home />
      },
      {
        path: "/data-vizor/about",
        element: <About />
      },
      {
        path: "/data-vizor/services",
        element: <Services />
      },
      {
        path: "/data-vizor/prices",
        element: <Prices />
      },
      {
        path: "/data-vizor/contact",
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
