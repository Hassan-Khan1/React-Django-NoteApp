import axios from 'axois';

import * as actionTypes from './actionTypes'

export const authstart = () => {
  return {
    type: actionTypes.AUTH_START,
  }
}

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  }
}

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('expirationsDate');
  return {
    type : actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTmeout = expirationsTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, expirationsTime * 1000)
  }
}

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authstart());
    axios.post('http://127.0.0.1:8000/rest-auth/login', {
      username: username,
      password: password,
    })
      .then(res => {
        const token = res.data.key
        const expirationsDate = new Date(new Date().getTime() * 3600 * 1000);
        localStorage.setItem('token', token)
        localStorage.setItem('expirationsDate', expirationsDate)
        dispatch(authSuccess(token));
        dispatch(checkAuthTmeout(3600));

      })
      .catch(err => {
        dispatch(actionTypes.AUTH_FAIL(err))
      })
  }
}

