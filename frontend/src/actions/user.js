export const loginToken = (data) => {
  return {
      type: 'Login_Token' ,
      payload : data
  }
}