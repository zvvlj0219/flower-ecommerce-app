import API from '../axios.config'

export const fetchWishlist = list => {
  return API.post('/wishlist', {
    list
  })
}

export const updateIsLiked = (id, isLiked) => {
  return API.put('/product-detail/isLiked', {
    _id: id,
    isLiked
  })
}
