const initialState = {
  products: {
    loading: true,
    list: [],
    error: null
  },
  users: {
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
