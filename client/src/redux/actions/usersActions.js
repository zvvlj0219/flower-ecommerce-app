import jwtDecode from 'jwt-decode'
import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'
import initialState from '../../store/initialState'
import Merge from '../../module/takeover'
// import errorActions from './errorActions'

export const listenAuth = (history, pathname = '/') => async dispatch => {
  try {
    const token = JSON.parse(localStorage.getItem('profile'))

    dispatch({
      type: actionsType.LISTEN_AUTH_REQUEST,
      payload: {
        isSignedIn: true
      }
    })

    const { email, _id } = jwtDecode(token)

    const { data } = await api.listenAuth({ email, _id })

    dispatch({
      type: actionsType.LISTEN_AUTH,
      payload: {
        ...data.user,
        isSignedIn: true,
        loading: false
      }
    })

    history.push(pathname)

    localStorage.setItem('profile', JSON.stringify(data.token))

    if (localStorage.getItem('guestProfile')) {
      localStorage.removeItem('guestProfile')
    }
  } catch (error) {
    history.push('/auth/signin')

    localStorage.removeItem('profile')
  }
}

export const initAuth = (history, pathname = '/') => async dispatch => {
  if (!localStorage.getItem('guestProfile')) {
    const storageData = {
      cart: [],
      isSignedIn: false,
      wishlist: []
    }

    localStorage.setItem('guestProfile', JSON.stringify(storageData))

    dispatch({
      type: actionsType.INIT_AUTH,
      payload: storageData
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

    const { _id, wishlist: userWishlist, cart: userCart } = data.user

    // if browser has guesuprofile
    // take over cart and wishlist with signin
    if (localStorage.getItem('guestProfile')) {
      const { wishlist: guestWishlist, cart: guestCart } = JSON.parse(
        localStorage.getItem('guestProfile')
      )

      const merge = new Merge(guestWishlist, guestCart, userWishlist, userCart)

      const { data: mergedData } = await api.takeOver(
        _id,
        merge.takeoverWishlist(),
        merge.takeoverCart()
      )

      dispatch({
        type: actionsType.SIGN_IN,
        payload: {
          ...mergedData.user,
          isSignedIn: true
        }
      })

      localStorage.removeItem('guestProfile')
    } else {
      dispatch({
        type: actionsType.SIGN_IN,
        payload: {
          ...data.user,
          isSignedIn: true
        }
      })
    }

    history.push('/')

    localStorage.setItem('profile', JSON.stringify(data.token))
  } catch (error) {
    throw new Error()
  }
}

export const register = (form, history) => async () => {
  try {
    await api.register(form)

    history.push('/auth/signin')
  } catch (error) {
    throw new Error()
  }
}

export const guestInfo = (client, address) => async (dispatch, getState) => {
  const information = {
    client,
    address
  }

  const { users } = getState()

  localStorage.setItem(
    'guestProfile',
    JSON.stringify({
      ...users,
      information
    })
  )

  dispatch({
    type: actionsType.GUEST_INFO,
    payload: information
  })
}

export const orderConfirm = history => async (dispatch, getState) => {
  try {
    dispatch({ type: actionsType.ORDER_CONFIRM_REQUEST })

    const { users } = getState()
    const { _id, cart } = users

    const { data } = await api.orderConfirm(_id, cart)

    dispatch({
      type: actionsType.ORDER_CONFIRM_SUCCESS,
      payload: data.user
    })

    history.push('/order/complete')
  } catch (err) {
    history.push('/cart')
    alert('処理に失敗しました')
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
