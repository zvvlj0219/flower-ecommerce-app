import API from '../axios.config'

export const updateWishlist = (userId, wishlist) => {
  return API.put('/wishlist/updateWishlist', {
    userId,
    wishlist
  })
}
