import axios from 'axios'

// baseURL
const API = axios.create({ baseURL: 'http://localhost:5000/api' })

API.interceptors.request.use(req => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))}`
  }
  return req
})

export default API
