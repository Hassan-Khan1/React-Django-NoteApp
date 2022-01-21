// Token ActionType  
import { LOGIN_TOKEN } from "./actionTypes"

export const loginToken = (data) => {
  return {
      type: LOGIN_TOKEN ,
      payload : data
  }
}
