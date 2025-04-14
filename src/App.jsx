import React from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import AppLayout from './components/AppLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },

        {
          path: '/about',
          element: <About />,
        },

        {
          path: '/portfolio',
          element: <Portfolio />,
        },

        {
          path: '/contact',
          element: <Contact />,
        },

        {
          path: '*',
          element: <NotFoundPage />
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
