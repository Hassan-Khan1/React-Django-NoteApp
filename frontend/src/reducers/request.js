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
        ...initialState, notes: action.payload
      }
    case "POST_DATA_ID":
      return {
        ...initialState, notes: action.payload
      }
    case "PUT_DATA_ID":
      return {
        ...initialState, notes: action.payload
      }
    case "DEL_DATA_ID":
      return {
        ...initialState, notes: action.payload
      }
    default: return state;
  }
};
export default requestReducer;