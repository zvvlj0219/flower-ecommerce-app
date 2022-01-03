const initialState = {
  products: {
    loading: true,
    list: [],
    error: null
  },
  productDetail: {
    loading: true,
    detail: {},
    error: null
  },
  wishlist: {
    loading: true,
    list: [],
    error: null
  },
  cart: {
    list: []
  }
}

export default initialState
