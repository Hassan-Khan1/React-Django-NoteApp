

class API {

  // getNoteList = async (path) => {
  //   let respone = await fetch(path);
  //   let data = await respone.json();
  // return data
  // }
  
  get = async (path) => {
    let response = await fetch(path);
      let data = await response.json();
  return data
  }
  
  post = async (path,data) => {
    await fetch(path, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }
  put = async (path,data) => {
    await fetch(path, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }
  delete = async (path,data) => {
    await fetch(path, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json'},
    })
  }
}
export default new API();
