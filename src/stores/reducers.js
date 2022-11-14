import { combineReducers } from 'redux';

export default routerReducer =>
  combineReducers({
    router: routerReducer,
  });
