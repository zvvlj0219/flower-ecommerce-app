import API from '../axios.config'

export const updateWishlist = (_id, wishlist) => {
  return API.put('/wishlist/updateWishlist', {
    _id,
    wishlist
  })
}
