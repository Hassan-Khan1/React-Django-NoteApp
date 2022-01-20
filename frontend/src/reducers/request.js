const initialState = {
  notes: []
}
const requestReducer = (state = initialState, action) => {
  switch (action.type) {

    case "GET_DATA":
      return {
        ...initialState, notes: action.payload
      }
    case "GET_DATA_ID":
      return {
        ...initialState, getDataId: action.payload
      }
    case "POST_DATA_ID":
      return {
        ...initialState, postData: action.payload
      }
    case "PUT_DATA_ID":
      return {
        ...initialState, putData: action.payload
      }
    case "DEL_DATA_ID":
      return {
        ...initialState, delData: action.payload
      }
    case "Login_Token":
      return {
        ...initialState, loginToken: action.payload
      }
    default: return state;
  }
};
export default requestReducer;