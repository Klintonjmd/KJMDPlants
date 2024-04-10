import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<App />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
    </Route>
  )
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

