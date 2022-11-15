import React from 'react';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';

import ErrorBoundary from './components/ErrorBoundary';
import Router from './routes';
import configureStore, { createReduxHistory } from './stores/configureStore';

const store = configureStore();
const history = createReduxHistory(store);

const APP = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <HistoryRouter history={history}>
          <Router />
        </HistoryRouter>
      </ErrorBoundary>
    </Provider>
  );
};

export default APP;
