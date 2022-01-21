import React, { useState, } from 'react'

import { useHistory } from 'react-router-dom';

// Users Actions
import { loginToken } from '../../ducks/users/actions';


// React Redux
import { useDispatch } from 'react-redux'

// Api Services
import API from '../../services/API.js'

import { Form, Input, Button, Checkbox,Modal } from 'antd';


const Login = () => {
	const history = useHistory();
	const [state, setState] = useState({ username: '', password: '' });
	const dispatch = useDispatch();

	const onFinish = async (state) => {
		const res = await API.loginApi('/auth/', state)
		if (res.token) {
			dispatch(loginToken(res.token))
			history.push('/');
		} else {
			Modal.error({
				title: 'Confirm',
				content: 'Unable to log in with provided credentials',
				okText: 'Ok',
				cancelText: 'Cancel',
			});		}

	}

	const register = async (event) => {
		await API.registerApi('/api/users/', state)
	}


	const onFinishFailed = (errorInfo) => {

		console.log('Failed:', errorInfo);
	};


	const inputChanged = (event) => {
		const cred = { ...state };
		cred[event.target.name] = event.target.value;
		setState(cred);
	}

	return (
		<Form
			name="basic"
			labelCol={{ span: 5 }}
			wrapperCol={{ span: 16 }}

			initialValues={{ username: state.username, password: state.password }}


			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Username"
				name="username"

				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>

			{/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
			<Checkbox>Remember me</Checkbox>
		</Form.Item> */}

			<Form.Item wrapperCol={{ offset: 5, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>

	);
}

export default Login;


// <div className='notes-login'>
// <h1 className=''>Login user form</h1>
// <label>
// 	Username:
// 	<input type="text" name="username"
// 		value={state.username}
// 		onChange={inputChanged} />
// </label>
// <br />
// <label>
// 	Password:
// 	<input type="password" name="password"
// 		value={state.password}
// 		onChange={inputChanged} />
// </label>
// <br />
// <button onClick={login}>Login</button>
// <button onClick={register}>Register</button>
// </div>


// const onFinish = async (state) => {
// 	const res = await API.loginApi('/auth/', state)
// 	dispatch(loginToken(res.token))
// 	history.push('/');	
// }
