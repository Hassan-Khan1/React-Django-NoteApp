import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

// Components
import ListItem from '../../components/ListItem/index.js'
import AddButton from '../../components/AddButton'

// Api Services
import API from '../../services/API.js'

// Note List Actions
import { getList } from '../../ducks/notes/actions.js';

import { Form, Input, Button, Checkbox, Modal } from 'antd';

const FormList = () => {

	const LocalStorageToken = localStorage.getItem('myData');
	// localStorage.clear()
	// console.log("LocalStorageToken....",LocalStorageToken)

	const history = useHistory();
	const notes = useSelector(state => state.requestRe.notes)
	const token = useSelector(state => state.userReducer.loginToken)
	const dispatch = useDispatch();

	useEffect(() => {
		getData()
	}, []);

	const getData = async () => {
		if (LocalStorageToken <= null) return (
			Modal.warning({
				title: 'warning',
				content: 'Please Login First',
				okText: 'Ok',
				cancelText: 'Cancel',
			}),
			history.push('/login') //  !token is not working

		)
		const res = await API.get('/api/notes/', LocalStorageToken);
		dispatch(getList(res))
	}


	if (notes.length === 0) return <h1>No Records Found!</h1>;
	return (
		<div className='notes'>
			<div className='note container-fluid'>
				<>
					<div className='notes-header'>
						<h2 className='notes-title'> &#9782; Notes</h2>
						<p className='notes-cout'>{notes.length}</p>
					</div>
					<div className='notes-list'>
						{notes.map((note, index) => (
							<ListItem key={index} {...note} />
						))}
					</div>
				</>
				<AddButton />
			</div>
		</div>
	)
};

export default FormList;
