// Token ActionType  
import { LOGIN_TOKEN } from "./actionTypes"

const initialState = {
  loginToken: []
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_TOKEN:
      return {
        ...initialState, loginToken: action.payload
      }
    default: return state;
  }
};

export default userReducer;
