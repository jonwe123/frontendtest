import axios from 'axios'
const baseURL = 'http://localhost:3001/api/users'

const getAllUsers = () => {
  const request = axios.get(baseURL)
  return request.then(response => response.data)
  // return axios.get(baseURL)
}

const getUser = (id) => {
  const request = axios.get(`${baseURL}/${id}`)
  return request.then(response => response.data)
  // return axios.get(`${baseURL}/${id}`)
}

const createUser = newObject => {
  const request = axios.post(baseURL, newObject)
  return request.then(response => response.data)
  // return axios.post(baseURL, newObject)
}

const updateUser = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject)
  return request.then(response => response.data)
  // return axios.put(`${baseURL}/${id}`, newObject)
}

const deleteUser = (id) => {
  const request = axios.delete(`${baseURL}/${id}`)
  return request.then(response => response.data)
  // return axios.delete(`${baseURL}/${id}`)
}
export default { getAllUsers, getUser, createUser, updateUser, deleteUser }