import jwtDecode from 'jwt-decode'
import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'
import initialState from '../../store/initialState'
// import errorActions from './errorActions'

export const listenAuth = (history, pathname = '/') => async dispatch => {
  try {
    const token = JSON.parse(localStorage.getItem('profile'))

    const { email, _id } = jwtDecode(token)

    const { data } = await api.listenAuth({ email, _id })

    dispatch({
      type: actionsType.LISTEN_AUTH,
      payload: {
        user_id: data.user._id,
        email: data.user.email,
        username: data.user.username,
        isSignedIn: true,
        cart: data.user.cart,
        wishlist: data.user.wishlist
      }
    })

    history.push(pathname)

    localStorage.setItem('profile', JSON.stringify(data.token))
  } catch (error) {
    history.push('/auth/signin')

    localStorage.removeItem('profile')
  }
}

export const initAuth = (history, pathname = '/') => async dispatch => {
  if (!localStorage.getItem('guestProfile')) {
    localStorage.setItem('guestProfile', JSON.stringify({
      cart: [],
      isSignedIn: false,
      wishlist: []
    }))

    dispatch({
      type: actionsType.INIT_AUTH,
      payload: {
        cart: [],
        isSignedIn: false,
        wishlist: []
      }
    })
  } else {
    dispatch({
      type: actionsType.INIT_AUTH,
      payload: JSON.parse(localStorage.getItem('guestProfile'))
    })
  }
  history.push(pathname)
}

export const signIn = (form, history) => async dispatch => {
  try {
    const { data } = await api.signIn(form)

    const { _id, email, username, cart, wishlist } = data.user

    // const storageWishlist = JSON.parse(localStorage.getItem('guestProfile')).wishlist

    // const mergedWishlist = wishlist.filter(el =>  storageWishlist.indexOf(el) === -1)

    // const result = await api.takeOver(_id, cart, mergedWishlist)

    dispatch({
      type: actionsType.SIGN_IN,
      payload: {
        user_id: _id,
        email,
        username,
        isSignedIn: true,
        cart,
        wishlist
      }
    })

    history.push('/')

    localStorage.setItem('profile', JSON.stringify(data.token))

    localStorage.removeItem('guestProfile')
  } catch (error) {
    throw new Error()
  }
}

export const register = (form, history) => async () => {
  try {
    const { data } = await api.register(form)

    console.log(data)

    history.push('/auth/signin')
  } catch (error) {
    throw new Error()
  }
}

export const logout = history => async dispatch => {
  dispatch({
    type: actionsType.LOGOUT
  })

  localStorage.removeItem('profile')

  localStorage.setItem('guestProfile', JSON.stringify(initialState.users))

  history.push('/')
}
