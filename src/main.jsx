import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

import Contact from './pages/Contact';
import Property from './pages/Property';
import ErrorPage from './pages/ErrorPage';
import { HelmetProvider } from 'react-helmet-async';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './components/AuthProvider';
import ProtectedRoute from './pages/ProtectedRoute';
import Profile from './components/Profile';
import Exclusive from './pages/Exclusive';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/property/:id',
        element: <ProtectedRoute>
          <Property></Property>
        </ProtectedRoute>,
        loader: () => fetch('../estates.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/update-profile',
        element:<ProtectedRoute>
          <Profile></Profile>
        </ProtectedRoute>
      },
      {
        path: '/exclusive',
        element: <ProtectedRoute>
          <Exclusive></Exclusive>
        </ProtectedRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>

  </React.StrictMode>,
)
