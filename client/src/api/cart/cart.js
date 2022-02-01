import API from '../axios.config'

export const updateCart = (_id, cart) => {
  return API.put('/cart/updateCart', {
    _id,
    cart
  })
}

export const orderConfirm = (_id, cart) => {
  return API.post('/cart/orderConfirm', {
    _id,
    cart
  })
}
