import API from '../axios.config'

export const fetchWishlist = _id => {
  return API.post('/wishlist', {
    _id
  })
}

export const updateWishlist = (_id, wishlist) => {
  return API.put('/wishlist/updateWishlist', {
    _id,
    wishlist
  })
}
