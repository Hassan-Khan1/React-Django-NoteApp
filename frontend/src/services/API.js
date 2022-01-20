
class API {

  get = async (path, token) => {
    let response = await fetch(path, {
      method: "GET",
      headers: { 'Authorization': `Token ${token}` },
    })
    let data = await response.json();
    return data
  }
  post = async (path, data, token) => {
    await fetch(path, {
      method: "POST",
      // headers: { 'Content-Type': 'application/json' },
      headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${token}` },
      body: JSON.stringify(data)
    })
  }
  put = async (path, data, token) => {
    await fetch(path, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${token}` },
      body: JSON.stringify(data)
    })
  }
  delete = async (path, token) => {
    await fetch(path, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${token}` },
    })
  }
  // login = async (path, token) => {
  //   await fetch('http://127.0.0.1:8000/auth/', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify(state)
  //    })
  // }

  // register = async (path, token) => {
  //   await fetch(path, {
  //     method: "DELETE",
  //     headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${token}` },
  //   })
  // }
}
export default new API();





// getNoteList = async (path) => {
  //   let respone = await fetch(path);
  //   let data = await respone.json();
  // return data
  // }
  // get = async (path) => {
  //   let response = await fetch(path);
  //   let data = await response.json();
  //   return data
  // }