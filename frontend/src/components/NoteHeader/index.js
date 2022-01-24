import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const NoteHeader = ({ history }) => {
	return (
		// <div className='app-header'>
		<div className='container-fluid'>
			<div className='header'>
				<div className="logo">
					<a href='#'>Django React</a>
				</div>
				<Menu mode="horizontal" defaultSelectedKeys={'1'}>
					<Menu.Item key="1" >
						<Link to="/" />Home
					</Menu.Item>
					<Menu.Item >
						<Link to="/login" />Login
					</Menu.Item>
					<Menu.Item>
					<Link to="/register"/> Register</Menu.Item>
				</Menu>
			</div>
		</div>
	)
};

export default NoteHeader;

{/* <Menu.Item onClick={() => history.push('/login')}> */ }
