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
  users: {
    _id: null,
    email: null,
    username: null,
    isSignedIn: false,
    cart: [],
    wishlist: []
  }
}

export default initialState
