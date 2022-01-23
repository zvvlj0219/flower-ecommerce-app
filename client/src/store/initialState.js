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
    loading: true,
    _id: null,
    email: null,
    username: null,
    isSignedIn: false,
    cart: [],
    wishlist: [],
    order: [],
    information: {
      client: '',
      address: '',
      payment: []
    }
  }
}

export default initialState
