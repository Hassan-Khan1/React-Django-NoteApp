

class API {

  getNoteList = async (path) => {
    let respone = await fetch(path)
    let data = await respone.json()
  return data
  }
  
  getNote = async (path) => {
    let response = await fetch(path);
      let data = await response.json()
  return data
  }

  createNoteApi = async (path,note) => {
    fetch(path, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  updateNoteApi = async (path,note) => {
    fetch(path, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  deleteNoteApi = async (path,note) => {
    fetch(path, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }
}
export default new API();
