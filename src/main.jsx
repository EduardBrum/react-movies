import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Details from './routes/Details.jsx'
import { MovieList } from './routes/Movielist.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'


import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieList /> 
  },
  {
    path: "movie/:movieId",
    element: <Details />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  </React.StrictMode>,
)