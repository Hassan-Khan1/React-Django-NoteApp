import React, { useEffect, useState } from 'react'
import ListItem from '../../components/ListItem/index.js'
import AddButton from '../../components/AddButton'

//  DRF Get API 
import API from '../../services/API.js'

const NotesListPage = () => {
	let [notes, setNotes] = useState([])
	useEffect(() => {
		const getdata = async () => {
			setNotes(await API.getNoteList('/api/notes/'));
		}
		getdata();
	}, [])

	return (
		<div className='notes'>
			<div className='notes-header'>
				<h2 className='notes-title'>&#9782; Notes</h2>
				<p className='notes-cout'>{notes.length}</p>
			</div>
			<div className='notes-list'>
				{notes.map((note, index) => (
					// <h3 key={index}>{ note.body}</h3>
					<ListItem key={index} note={note} />
				))}
			</div>
			<AddButton />
		</div>
	)
}
export default NotesListPage;
