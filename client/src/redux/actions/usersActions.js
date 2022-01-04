import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'
// import errorActions from './errorActions'

export const listenAuth = history => async dispatch => {
  try {
    const storageData = JSON.parse(localStorage.getItem('profile'))

    console.log(storageData)

    dispatch({
      type: actionsType.LISTEN_AUTH,
      payload: {
        user_id: storageData._id,
        email: storageData.email,
        username: storageData.username,
        isSignedIn: true,
        cart: storageData.cart,
        wishlist: storageData.wishlist
      }
    })

    history.push(`/${storageData.username}`)
  } catch (error) {
    history.push('/auth/signin')
  }
}
export const signIn = (form, history) => async dispatch => {
  try {
    console.log('signin')

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

    history.push(`/${username}`)

    localStorage.setItem('profile', JSON.stringify(storageData))
  } catch (error) {
    //
  }
}

export const register = (form, history) => async () => {
  try {
    console.log('register')

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
