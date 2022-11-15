import { combineEpics } from 'redux-observable';

import * as menu from './slices/menu.store';
import { getEpicsFromSlices } from './utils';

export default combineEpics(...getEpicsFromSlices([menu]));
