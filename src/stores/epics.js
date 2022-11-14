import { combineEpics } from 'redux-observable';

import { getEpicsFromSlices } from './utils';

export default combineEpics(...getEpicsFromSlices([]));
