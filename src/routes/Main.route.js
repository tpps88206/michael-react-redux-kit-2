import React, { lazy } from 'react';

import Loadable from '../components/Loadable';
import MainLayout from '../layouts/Main.layout';

const MainPage = Loadable(lazy(() => import('../pages/Main.page')));

const MainRouter = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <MainPage />,
    },
  ],
};

export default MainRouter;
