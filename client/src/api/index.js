import axios from 'axios'

// baseURL
const API = axios.create({ baseURL: 'http://localhost:5000/api' })

// initial fetch three products
export const initialProducts = () => {
  console.log('initial')
  return API.get('/')
}

// ajax fetch six products
// params intial 3 ids
export const ajaxProducts = id => {
  return API.get('/', {
    params: {
      id: [...id]
    }
  })
}
