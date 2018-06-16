import { combineReducers } from 'redux';

import number from './number';
import color from './color';

const reducers = combineReducers({
  numberData: number,
  colorData: color,
});

export default reducers;
