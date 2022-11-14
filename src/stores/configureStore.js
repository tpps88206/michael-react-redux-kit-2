import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReduxHistoryContext } from 'redux-first-history';
import { createEpicMiddleware } from 'redux-observable';

import { createBrowserHistory } from 'history';

import rootEpic from './epics';
import createRootReducer from './reducers';

const epicMiddleware = createEpicMiddleware();

export const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const configureStore = () => {
  const FLAVOR = process.env.REACT_APP_FLAVOR;
  console.warn('React app flavor is setting at: ' + FLAVOR);

  const store = createStore(
    createRootReducer(routerReducer),
    composeWithDevTools({
      trace: FLAVOR !== 'prod',
    })(applyMiddleware(routerMiddleware, epicMiddleware)),
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
