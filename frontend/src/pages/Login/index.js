import React, { useState, } from 'react'
//  Link of Specific Note Id
import { useHistory } from 'react-router-dom';

// Actions
import { loginToken } from '../../actions/user';

// React Redux
import { useDispatch } from 'react-redux'

// Api Services
import API from '../../services/API.js'

const Login = () => {
	const history = useHistory();
	const [state, setState] = useState({ username: '', password: '' });
	const dispatch = useDispatch();

	const login = async (event) => {
		const res = await API.loginApi('/auth/', state)
		dispatch(loginToken(res.token))
		history.push('/');
	}

	const register = async (event) => {
		await API.registerApi('/api/users/', state)
	}

	const inputChanged = (event) => {
		const cred = { ...state };
		cred[event.target.name] = event.target.value;
		setState(cred);
	}

	return (
		<div className='notes-login'>
			<h1 className=''>Login user form</h1>
			<label>
				Username:
				<input type="text" name="username"
					value={state.username}
					onChange={inputChanged} />
			</label>
			<br />
			<label>
				Password:
				<input type="password" name="password"
					value={state.password}
					onChange={inputChanged} />
			</label>
			<br />
			<button onClick={login}>Login</button>
			<button onClick={register}>Register</button>
		</div>
	);
}

export default Login;

