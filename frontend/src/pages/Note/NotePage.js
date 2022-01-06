import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'

//  DRF API Calls
import API from '../../services/API'

const NotePage = ({ match, history }) => {

  let noteId = match.params.id
  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteId])

  let getNote = async () => {
    if (noteId === 'new') return
    setNote(await API.getNote('/api/notes/' + noteId));
  }

  let createNote = async () => {
    await API.createNoteApi('/api/notes/create/', note)
  }

  let updateNote = async () => {
    await API.updateNoteApi('/api/notes/' + noteId + '/update/', note)
  }

  let deleteNote = async () => {
    await API.deleteNoteApi('/api/notes/' + noteId + '/delete/')
    history.push('/')
  }

  let handleSubmit = () => {
    if (noteId !== 'new' && note.body === '') {
      deleteNote()
    } else if (noteId !== 'new') {
      updateNote()
    } else if (noteId === 'new' && note !== null) {
      createNote()
    }
    updateNote()
    history.push('/')
  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3><ArrowLeft onClick={handleSubmit} /></h3>
        {noteId !== 'new' ? (
          <button onClick={deleteNote}>DELETE</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea onChange={(e) => { setNote(({ ...note, 'body': e.target.value })) }} defaultValue={note?.body}></textarea>
    </div>
  )
}
export default NotePage
