import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '../components/NotFound';
import Progress from '../components/Progress';

const MainPage = lazy(() => import('../pages/MainPage'));

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Progress />}>
            <MainPage />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRouter;
