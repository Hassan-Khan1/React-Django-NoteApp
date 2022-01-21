import React, { useState, useEffect } from 'react'
import { Form, Input, Button, } from 'antd';
import { useParams } from "react-router-dom";

//  components Icon
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'

//  API Services 
import API from '../../services/API'

// Note Id  Actions
import { postNoteAction, putNoteAction, delNoteAction, getNoteIdAction } from '../../ducks/notes/actions';

// React Redux
import { useSelector, useDispatch } from 'react-redux'

const FormIdData = ({ history }) => {
  const { id } = useParams();

  const data = useSelector(state => state.requestRe.getDataId)
  const token = useSelector(state => state.userReducer.loginToken)
  const dispatch = useDispatch();

  useEffect(() => {
    getNote();
  }, [id])

  const getNote = async () => {
    if (id === 'new') return
    console.log("asdasdds",token)
    const res = await API.get(`/api/notes/${id}`, token)
    dispatch(getNoteIdAction(res))
  }
  const postNote = async () => {
    const res = API.post('/api/notes/', data, token);
    dispatch(postNoteAction(res))
  }
  const putNote = async () => {
    const res = API.put(`/api/notes/${id}/`, data, token);
    dispatch(putNoteAction(res))
  }
  const deleteNote = async () => {
    const res = API.delete(`/api/notes/${id}/`, token);
    dispatch(delNoteAction(res))
    history.push('/');
  }
  const handleSubmit = () => {
    if (id !== 'new' && data.body === '') {
      deleteNote();
    } else if (id !== 'new') {
      putNote();
    } else if (id === 'new' && data !== null) {
      postNote();
    };
    history.push('/');
  }
  console.log('data....', data?.body)
  return (
    <div className='note'>
      <div className='note-header'>
        <h3><ArrowLeft onClick={handleSubmit} /></h3>
        {id !== 'new' ? (
          <button onClick={deleteNote}>DELETE</button>
        ) : (
          <button onClick={handleSubmit} >Done</button>
        )}
      </div>
      <label>Form Text Page</label>
      <textarea onChange={(e) => { dispatch(getNoteIdAction((({ ...data, 'body': e.target.value })))) }} defaultValue={data?.body}></textarea>
    </div>
  )
};
export default FormIdData;
