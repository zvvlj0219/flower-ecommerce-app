const initialState = {
  products: {
    loading: true,
    list: [],
    error: null
  },
  productDetail: {
    loading: true,
    detail: [],
    error: null
  },
  wishlist: {
    list: localStorage.getItem('wishlist')
      ? JSON.parse(localStorage.getItem('wishlist'))
      : []
  },
  cart: {
    list: []
  }
}

export default initialState
