import API from '../axios.config'

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
