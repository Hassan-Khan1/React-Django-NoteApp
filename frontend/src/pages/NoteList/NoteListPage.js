import React, { useEffect, useState } from 'react'
import ListItem from '../../components/ListItem/index.js'
import AddButton from '../../components/AddButton'

const NotesListPage = () => {
	let [notes, setNotes] = useState([])
	useEffect(() => {
		getNotes()
	}, [])
	// async  or Promise
	let getNotes = async () => {
		let respone = await fetch('/api/notes/')
		let data = await respone.json()
		console.log("Data : ", data)
		setNotes(data)
	}
	
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
