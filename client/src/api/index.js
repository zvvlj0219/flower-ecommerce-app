import axios from 'axios'

// baseURL
const API = axios.create({ baseURL: 'http://localhost:5000/api' })

// initial fetch three products
export const initialProducts = () => {
  return API.get('/')
}

// ajax fetch six products
export const ajaxProducts = id => {
  return API.post('/ajax', {
    _id: id
  })
}

export const fetchDetail = id => {
  return API.post('/product-detail', {
    _id: id
  })
}

export const updateIsLiked = (id, isLiked) => {
  return API.put('/product-detail/isLiked', {
    _id: id,
    isLiked
  })
}
