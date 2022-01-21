
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
  loginApi = async (path, state) => {
    let response = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    })
    let data = await response.json();
    return data
  }
  registerApi = async (path, state) => {
    let response = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    })
    let data = await response.json();
    return data
  }
}

export default new API();

