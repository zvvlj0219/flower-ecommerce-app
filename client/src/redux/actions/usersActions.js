import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'
// import errorActions from './errorActions'

export const signIn = (form, history) => async dispatch => {
  try {
    console.log('signin')

    const { data } = await api.signIn(form)

    const { _id, email, username, cart, wishlist } = data.user

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
  } catch (error) {
    //
  }
}

export const register = (form, history) => async dispatch => {
  try {
    console.log('register')

    const { data } = await api.register(form)

    console.log(data)

    dispatch({
      type: actionsType.REGISTER,
      payload: data.user
    })

    history.push('/auth/signin')
  } catch (error) {
    //
  }
}
