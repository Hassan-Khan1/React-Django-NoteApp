import React, { useEffect, useState, Component } from 'react'
//  Link of Specific Note Id


// const Login = () => {
// 	const state = {
// 		credentials: { username: '', password: '' }
// 	}
// 	// const deleteNote = async () => {
//   //   const res = API.delete(`/api/notes/${id}/delete/`);
//   //   dispatch(delnote(res))
//   //   history.push('/');
//   // }
// 	// http://127.0.0.1:8000/api/router/users/
// 	const login = event => {
// 		console.log(this.state.credentials)
// 		fetch('http://127.0.0.1:8000/auth/', {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify(state.credentials)
// 		})
// 			.then(data => data.json())
// 			.then(
// 				data => {
// 					console.log(data.token)

// 					this.props.userLogin(data.token);
// 				}
// 			)
// 			.catch(error => console.error(error))
// 	}

// 	const register = event => {
// 		fetch('http://127.0.0.1:8000/api/users/', {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify(state.credentials)
// 		})
// 			.then(data => data.json())
// 			.then(
// 				data => {
// 					console.log(data);
// 				}
// 			)
// 			.catch(error => console.error(error))
// 	}
// 	const inputChanged = event => {
// 		const cred = state.credentials;
// 		cred[event.target.name] = event.target.value;
// 		this.setState({ credentials: cred });
// 	}

// 	return (
// 		<div >
// 			<h1>Login user form</h1>

// 			<label>
// 				Username:
// 				<input type="text" name="username"
// 					value={state.credentials.username}
// 					onChange={inputChanged} />
// 			</label>
// 			<br />
// 			<label>
// 				Password:
// 				<input type="password" name="password"
// 					value={state.credentials.password}
// 					onChange={inputChanged} />
// 			</label>
// 			<br />
// 			<button onClick={login}>Login</button>
// 			<button onClick={register}>Register</button>

// 		</div>
// 	)
// };
// export default Login;


class Login extends Component {

	state = {
		credentials: { username: '', password: '' }
	}

	login = event => {
		console.log(this.state.credentials)
		fetch('http://127.0.0.1:8000/auth/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(this.state.credentials)
		})
			.then(data => data.json())
			.then(
				data => {
					console.log(data.token)

					// this.props.userLogin(data.token);
				}
			)
			.catch(error => console.error(error))
	}
	// http://127.0.0.1:8000/api/router/users/
	register = event => {
		fetch('http://127.0.0.1:8000/api/router/users/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(this.state.credentials)
		})
			.then(data => data.json())
			.then(
				data => {
					console.log(data);
				}
			)
			.catch(error => console.error(error))
	}
	inputChanged = event => {
		const cred = this.state.credentials;
		cred[event.target.name] = event.target.value;
		this.setState({ credentials: cred });
	}

	render() {
		return (
			<div>
				<h1>Login user form</h1>

				<label>
					Username:
					<input type="text" name="username"
						value={this.state.credentials.username}
						onChange={this.inputChanged} />
				</label>
				<br />
				<label>
					Password:
					<input type="password" name="password"
						value={this.state.credentials.password}
						onChange={this.inputChanged} />
				</label>
				<br />
				<button onClick={this.login}>Login</button>
				<button onClick={this.register}>Register</button>
			</div>
		);
	}
}

export default Login;