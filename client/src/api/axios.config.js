import axios from 'axios'

// baseURL
const API = axios.create({ baseURL: 'http://localhost:5000/api' })

export default API
