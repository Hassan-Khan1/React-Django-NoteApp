import requestReducer from "./request";
import userReducer from "./user";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  requestRe: requestReducer,
  userReducer:userReducer
  
});
export default allReducers;