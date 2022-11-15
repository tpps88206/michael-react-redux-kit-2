import React, { lazy } from 'react';

import Loadable from '../components/Loadable';

const NotFoundPage = Loadable(lazy(() => import('../pages/NotFound.page')));

const NotFoundRouter = {
  path: '*',
  element: <NotFoundPage />,
};

export default NotFoundRouter;
