const initialState = {
  loginToken: []
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Login_Token":
      return {
        ...initialState, loginToken: action.payload
      }
    default: return state;
  }
};
export default userReducer;
