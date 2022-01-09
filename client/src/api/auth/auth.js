import API from '../axios.config'

export const listenAuth = data => {
  return API.post('/auth/listenAuth', data)
}

export const signIn = form => {
  return API.post('/auth/signin', form)
}

export const takeOver = (_id, wishlist, cart) => {
  return API.post('/auth/takeOver', {
    _id,
    wishlist,
    cart
  })
}

export const register = form => {
  return API.post('/auth/register', form)
}
