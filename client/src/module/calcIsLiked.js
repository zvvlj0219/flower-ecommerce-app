class CalcIsLiked {
  constructor(wishlist, productId) {
    this.wishlist = wishlist
    this.productId = productId
    this.existedIndex = null
  }

  addToWishlist() {
    this.wishlist.push(this.productId)
    return this.wishlist
  }

  removeFromWishlist() {
    this.wishlist = this.wishlist.filter(id => id !== this.productId)
    return this.wishlist
  }
}

export default CalcIsLiked
