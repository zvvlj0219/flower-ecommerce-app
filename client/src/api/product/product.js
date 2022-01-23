import API from '../axios.config'

// initial fetch three products
export const initialProducts = () => {
  return API.get('/')
}

// ajax fetch six products
export const ajaxProducts = _id => {
  console.log(_id)
  return API.post('/ajax', {
    // _id : array
    _id
  })
}

export const fetchDetail = _id => {
  return API.post('/product-detail', {
    _id
  })
}
