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

    localStorage.setItem('profile', JSON.stringify(data.token))

    history.push(pathname)
  } catch (error) {
    console.log(error)
  }
}

export const initAuth = history => async dispatch => {
  try {
    localStorage.setItem('guestProfile', JSON.stringify(initialState.users))

    dispatch({
      type: actionsType.INIT_AUTH,
      payload: initialState.users
    })

    history.push('/')
  } catch (error) {
    //
  }
}

export const signIn = (form, history) => async dispatch => {
  try {
    const { data } = await api.signIn(form)

    const { _id, email, username, cart, wishlist } = data.user

    const storageData = {
      user_id: _id,
      email,
      username,
      isSignedIn: true,
      cart,
      wishlist
    }

    dispatch({
      type: actionsType.SIGN_IN,
      payload: storageData
    })

    history.push('/')

    localStorage.setItem('profile', JSON.stringify(data.token))
  } catch (error) {
    //
  }
}

export const register = (form, history) => async () => {
  try {
    const { data } = await api.register(form)

    console.log(data)

    history.push('/auth/signin')
  } catch (error) {
    //
  }
}

export const logout = history => async dispatch => {
  try {
    console.log('logout')

    dispatch({ type: actionsType.LOGOUT })

    localStorage.removeItem('profile')

    history.push('/')
  } catch (error) {
    //
  }
}
