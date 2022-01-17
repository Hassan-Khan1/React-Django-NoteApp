export const getlist = (data) => {
  return {
    type: 'GET_DATA',
    payload: data
  }
}


export const getnoteid = (data) => {
  return {
    type: 'GET_DATA_ID',
    payload: data
  }
}

export const postnote = (data) => {
  return {
    type: 'POST_DATA',
    payload: data
  }
}




