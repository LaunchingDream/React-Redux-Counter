import * as types from './ActionTypes';

export const increment = () => ({
  types: types.INCREMENT,
});

export const decrement = () => ({
  types: types.DECREMENT,
});

export const setColor = color => ({
  types: types.SET_COLOR,
  color,
});

