class CalcIsLiked {
  constructor(wishlist, detail) {
    this.wishlist = wishlist
    this.detail = detail
    this.existedIndex = null
  }

  addToWishlist() {
    this.wishlist.push({
      _id: this.detail._id,
      imageUrl: this.detail.imageUrl,
      name: this.detail.name,
      price: this.detail.price
    })
    return this.wishlist
  }

  removeFromWishlist() {
    this.wishlist = this.wishlist.filter(item => item._id !== this.detail._id)
    return this.wishlist
  }
}

export default CalcIsLiked
