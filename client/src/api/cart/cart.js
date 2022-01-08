import API from '../axios.config'

export const updateCart = (userId, cart) => {
  return API.put('/cart/updateCart', {
    userId,
    cart
  })
}
