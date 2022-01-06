import React, { useState, useEffect } from 'react'
import { Form, Input, Button, } from 'antd';
import { useParams } from "react-router-dom";

//  components
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'

//   Services 
import API from '../../services/API'

const { TextArea } = Input;

const NotePage = ({ history }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getNote();
  }, [id])

  const getNote = async () => {
    if (id === 'new') return
    setData(await API.get(`/api/notes/${id}`));
  }
  const postNote = async () => {
    await API.post('/api/notes/create/', data);
  }
  const putNote = async () => {
    await API.put(`/api/notes/${id}/update/`, data);
    // await API.put('/api/notes/' + id + '/update/', data);
  }
  const deleteNote = async () => {
    await API.delete(`/api/notes/${id}/delete/`);
    // await API.delete('/api/notes/' + id + '/delete/');

    history.push('/');
  }
  const handleSubmit = () => {
    if (id !== 'new' && data.body === '') {
      deleteNote();
    } else if (id !== 'new') {
      putNote();
    } else if (id === 'new' && data !== null) {
      postNote()
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

      <Form onFinish={handleSubmit} initialValues={{ name: data?.body }} >
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
      </Form>
      <textarea onChange={(e) => { setData(({ ...data, 'body': e.target.value })) }} defaultValue={data?.body}></textarea>
      {/* <TextArea rows={4} onChange={(e) => { setData(({ ...data, 'body': e.target.value })) }} defaultValue={ data?.body} /> */}
    </div>
  )
};
export default NotePage;

