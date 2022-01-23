class CalcCart {
  constructor(cart, detail) {
    this.cart = cart
    this.detail = detail
    this.existedIndex = null
  }

  findIndexInCart() {
    this.existedIndex = this.cart.findIndex(item => item._id === this.detail._id)
    if (this.existedIndex === -1) {
      this.existedIndex = null
    }
  }

  addToCart() {
    this.findIndexInCart()
    if (this.existedIndex >= 0 && this.existedIndex !== null) {
      this.cart[this.existedIndex].qty += 1
    } else {
      this.cart.push({
        _id: this.detail._id,
        countInStock: this.detail.countInStock,
        name: this.detail.name,
        price: this.detail.price,
        imageUrl: this.detail.imageUrl,
        qty: 1
      })
    }
    return this.cart
  }

  removeFromCart() {
    this.findIndexInCart()
    if (this.cart[this.existedIndex].qty === 1) {
      this.deleteFromCart()
    } else {
      this.cart[this.existedIndex].qty -= 1
    }
    return this.cart
  }

  deleteFromCart() {
    this.findIndexInCart()
    this.cart.splice(this.existedIndex, 1)
    return this.cart
  }
}

export default CalcCart
