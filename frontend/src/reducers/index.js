import requestReducer from "./request";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  requestRe: requestReducer,
});

export default allReducers;