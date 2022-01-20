import { createStore } from "redux"
import allReducers from "./reducers"
import userReducer from "./reducers/user"

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

