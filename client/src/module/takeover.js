class Merge {
  constructor(guestWishlist, guestCart, userWishlist, userCart) {
    this.guestWishlist = guestWishlist
    this.guestCart = guestCart
    this.userWishlist = userWishlist
    this.userCart = userCart
    this.roopkey = []
  }

  takeoverWishlist() {
    const x = this.guestWishlist.filter(id => this.userWishlist.indexOf(id) === -1)
    if (x.length > 0) {
      this.userWishlist.push(...x)
    }
    return this.userWishlist
  }

  takeoverCart() {
    this.guestCart.forEach((el, index) => {
      if (this.roopkey.indexOf(el._id) === -1) {
        this.roopkey.push(el._id)
        this.userCart.push({
          _id: el._id,
          qty: el.qty
        })
      } else {
        const duplicatedIndex = this.roopkey.indexOf(el._id)
        const presentIndex = index
        this.userCart[duplicatedIndex].qty += this.guestCart[presentIndex].qty
      }
    })
    return this.userCart
  }
}

export default Merge
