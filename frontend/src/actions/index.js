export const getList = (data) => {
  return {
    type: 'GET_DATA',
    payload: data
  }
}
export const getNoteIdAction = (data) => {
  return {
    type: 'GET_DATA_ID',
    payload: data
  }
}
export const postNoteAction = (data) => {
  return {
    type: 'POST_DATA_ID',
    payload: data
  }
}
export const putNoteAction = (data) => {
  return {
    type: 'PUT_DATA_ID',
    payload: data
  }
}
export const delNoteAction = (data) => {
  return {
    type: 'DEL_DATA_ID',
    payload: data
  }
}





