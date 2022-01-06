import React, { useEffect, useState } from 'react'
//  Link of Specific Note Id
import ListItem from '../../components/ListItem/index.js'
// Post Buttom
import AddButton from '../../components/AddButton'
//  Api Services
import API from '../../services/API.js'

const NotesListPage = () => {
	const [ notes, setNotes ] = useState([])
	useEffect(() => {
		const getdata = async () => {
			setNotes(await API.get('/api/notes/'));
		}
		getdata();
	}, []);
	// NoteList
	// NoteListPage
	return (
		<div className='notes'>
			<div className='notes-header'>
				<h2 className='notes-title'> &#9782; Notes</h2>
				<p className='notes-cout'>{ notes.length }</p>
			</div>
			<div className='notes-list'>
				{notes.map(( note, index )  => (
					<ListItem key={ index}  note={ note } />
				))}
			</div>
			<AddButton />
		</div>
	)
};
export default NotesListPage;
