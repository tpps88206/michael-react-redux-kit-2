import { combineReducers } from 'redux';

import menu from './slices/menu.store';

export default routerReducer =>
  combineReducers({
    router: routerReducer,
    menu,
  });
