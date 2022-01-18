import React from 'react'

//  Link of Specific Note Id
import { Link } from 'react-router-dom'

const getTitle = (note) => {
	const title = note.body.split('\n')[0];
	if (title.length > 45) {
		return title.slice(0, 45);
	}
	return title; // if remove Not Showing Title
}

const getContent = (note) => {
	const title = getTitle(note)
	// const is not working // content is constant
	let content = note.body.replaceAll('\n', '');
	content = content.replaceAll(title, '');
	if (content.length > 45) {
		return content.slice(0, 45) + '...';
	} else {
		return content;
	}
}
const ListItem = ({ note }) => {
	return (
		<Link to={'/notes/' + note.id}>
			<div className='notes-list-item'>
				<h3>{getTitle(note)}</h3>
				<p>
					<span>{new Date(note.updated).toLocaleDateString()}</span>
					{getContent(note)}
				</p>
			</div>
		</Link>
	)
};
export default ListItem;