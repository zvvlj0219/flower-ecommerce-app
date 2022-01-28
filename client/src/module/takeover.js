class Merge {
  constructor(guestWishlist, guestCart, userWishlist, userCart) {
    this.guestWishlist = guestWishlist
    this.guestCart = guestCart
    this.userWishlist = userWishlist
    this.userCart = userCart
    this.loopkey = []
  }

  takeoverWishlist() {
    this.loopkey = this.userWishlist.map(item => item._id)
    this.guestWishlist.forEach(element => {
      if (this.loopkey.indexOf(element._id) === -1) {
        this.userWishlist.push(element)
      }
    })
    return this.userWishlist
  }

  takeoverCart() {
    this.loopkey = this.userCart.map(item => item._id)
    this.guestCart.forEach((element, guestIndex) => {
      if (this.loopkey.indexOf(element._id) === -1) {
        this.userCart.push(element)
      } else {
        const duplicatedIndex = this.loopkey.indexOf(element._id)
        this.userCart[duplicatedIndex].qty += this.guestCart[guestIndex].qty
      }
    })
    return this.userCart
  }
}

export default Merge
