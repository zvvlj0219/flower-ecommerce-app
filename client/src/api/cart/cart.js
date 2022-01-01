import API from '../axios.config'

export const updateIsCartIn = id => {
  return API.put('/product-detail/isCartIn', {
    _id: id
  })
}
