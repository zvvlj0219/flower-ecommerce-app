const initialState = {
  products: {
    loading: true,
    list: [],
    error: null
  },
  users: {
    _id: null,
    email: '',
    username: '',
    isSignedIn: false,
    cart: [],
    wishlist: [],
    order: [],
    information: {
      client: '',
      address: ''
    }
  }
}

export default initialState
