import React, { useEffect, useState } from 'react'
//  Link of Specific Note Id
import ListItem from '../../components/ListItem/index.js'
// Post Buttom
import AddButton from '../../components/AddButton'
//  Api Services
import API from '../../services/API.js'
import { getlist } from '../../actions/index.js'
import { useSelector, useDispatch } from 'react-redux'

const NotesListPage = () => {
	
	const notes = useSelector(state => state.requestRe.notes)
	const token = useSelector(state => state.userReducer.loginToken)
	const dispatch = useDispatch();

	console.log('Token NoteList Page....',token)
	console.log('notes...12.',notes)

	useEffect(() => { getData() }, []);

	const getData = async () => {
		const res = await API.get('/api/notes/', token);

		        // Authorization: `Token ${this.props.token}`

		dispatch(getlist(res))
	}
	
	return (
		<div className='notes'>
			<div className='notes-header'>
				<h2 className='notes-title'> &#9782; Notes</h2>
				<p className='notes-cout'>{notes.length}</p>
			</div>
			<div className='notes-list'>
				
				{ notes && notes.map((note, index) => (
					<ListItem key={index} note={note} />
				))}

			</div>
			<AddButton />
		</div>
	)
};
export default NotesListPage;
