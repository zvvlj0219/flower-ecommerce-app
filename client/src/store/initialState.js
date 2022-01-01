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
    loading: true,
    list: localStorage.getItem('wishlist')
      ? JSON.parse(localStorage.getItem('wishlist'))
      : [],
    data: null,
    error: null
  },
  cart: {
    list: []
  }
}

export default initialState
