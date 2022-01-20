import React, { useState, useEffect } from 'react'
import { Form, Input, Button, } from 'antd';
import { useParams } from "react-router-dom";
//  components
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'
//   Services 
import API from '../../services/API'
import { postnote, putnote, delnote, getnoteid } from '../../actions';
import { useSelector, useDispatch } from 'react-redux'

const { TextArea } = Input;

const NotePage = ({ history }) => {
  const { id } = useParams();
  // const [data1, setData] = useState(null);

  const data = useSelector(state => state.requestRe.notes)

  // const { data } = useSelector(state => state.requestRe.find( notes.id ));
  const dispatch = useDispatch();

  useEffect(() => {
    getNote();
  }, [id])

  const getNote = async () => {
    if (id === 'new') return
    const res = await API.get(`/api/notes/${id}`)
    dispatch(getnoteid(res))
    // setData(await API.get(`/api/notes/${id}`));
    console.log("Notes...", data)
  }
  const postNote = async () => {
    const res = API.post('/api/notes/', data);
    dispatch(postnote(res))

    // await API.post('/api/notes/create/', data);
  }
  const putNote = async () => {
    const res = API.put(`/api/notes/${id}/`, data);
    dispatch(putnote(res))

    // await API.put(`/api/notes/${id}/update/`, data);
    // await API.put('/api/notes/' + id + '/update/', data);
  }
  const deleteNote = async () => {
    const res = API.delete(`/api/notes/${id}/`);
    dispatch(delnote(res))
    history.push('/');
    // await API.delete(`/api/notes/${id}/delete/`);
    // await API.delete('/api/notes/' + id + '/delete/');
  }
  const handleSubmit = () => {
    if (id !== 'new' && data.body === '') {
      console.log("Delete Request...")
      deleteNote();
    } else if (id !== 'new') {
      console.log("Put Request...")
      putNote();
    } else if (id === 'new' && data !== null) {
      console.log("Post Request...")
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

      {/* <Form onFinish={handleSubmit} initialValues={{ name: data?.body }} >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]} >
          <TextArea onChange={(e) => { setData(({ ...data, 'body': e.target.value })) }} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
      <textarea onChange={(e) => { dispatch(getnoteid((({ ...data, 'body': e.target.value })))) }} defaultValue={ data?.body }></textarea>
      {/* <textarea onChange={(e) => { dispatch(getnoteid((({ ...data, 'body': e.target.value })))) }} defaultValue={data?.body}></textarea> */}
      {/* <TextArea rows={4} onChange={(e) => { setData(({ ...data, 'body': e.target.value })) }} defaultValue={ data?.body} /> */}
      {/* <textarea onChange={(e) => { setData(({ ...data, 'body': e.target.value })) }} defaultValue={data?.body}></textarea> */}

    </div>
  )
};
export default NotePage;

