import React from 'react'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const NoteHeader = ({ history }) => {

	const onFinish = async (state) => {
		const localStorageToken = localStorage.getItem('myToken');
		// loginApi = async (path, state) => {
		let response = await fetch('/accounts/logout/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${localStorageToken}` },
			//   body: JSON.stringify(state)
		})
		localStorage.clear()
		let data = await response.json();
		return data
	}

	return (
		// <div className='app-header'>
		<Header>
			<div className='container-fluid'>
				<div className='header'>
					<div className="logo">
						<a href='#'>Django React</a>
					</div>
					{/* <div> */}
					<Menu mode="horizontal" defaultSelectedKeys={'1'}>
						<Menu.Item key="1" >
							<Link to="/" />Home
						</Menu.Item  >
						<Menu.Item key="2">
							<Link to="/login" />Login
						</Menu.Item>
						<Menu.Item key="3" >
							<Link to="/register" /> Register
						</Menu.Item>
						<Menu.Item key="4" >
							<Link to="/logout" /> Logout
						</Menu.Item>
					</Menu>

					<Button type='primary' ghost onClick={onFinish} >Logout</Button>
					{/* </div> */}
				</div>
			</div>
		</Header>
	)
};

export default NoteHeader;

{/* <Menu.Item onClick={() => history.push('/login')}> */ }
