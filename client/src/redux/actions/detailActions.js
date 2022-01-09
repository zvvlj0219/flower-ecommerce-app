import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'
import CalcCart from '../../module/calcCart'
import CalcIsLiked from '../../module/calcIsLiked'
import errorActions from './errorActions'

export const fetchDetail = id => async dispatch => {
  try {
    dispatch({ type: actionsType.FETCH_DETAIL_REQUEST })

    const { data } = await api.fetchDetail(id)

    dispatch({
      type: actionsType.FETCH_DETAIL_SUCCESS,
      payload: Object(data.result[0])
    })
  } catch (error) {
    errorActions(actionsType.FETCH_DETAIL_FAIL, error)
  }
}

export const listFilter = data => async dispatch => {
  try {
    dispatch({
      type: actionsType.FETCH_DETAIL_SUCCESS,
      payload: Object(data[0])
    })
  } catch (error) {
    errorActions(actionsType.FETCH_DETAIL_FAIL, error)
  }
}

export const addIsLiked = productId => async (dispatch, getState) => {
  try {
    const { users } = getState()

    if (users.isSignedIn) {
      const calc = new CalcIsLiked(users.wishlist, productId)

      const updatedWishlist = calc.addToWishlist()

      const { data } = await api.updateWishlist(users._id, updatedWishlist)

      dispatch({
        type: actionsType.UPDATE_WISHLIST,
        payload: data.user
      })
    } else {
      const { wishlist } = users

      const calc = new CalcIsLiked(wishlist, productId)

      const updatedData = {
        ...users,
        wishlist: calc.addToWishlist()
      }

      dispatch({
        type: actionsType.UPDATE_WISHLIST,
        payload: updatedData
      })

      localStorage.setItem('guestProfile', JSON.stringify(updatedData))
    }
  } catch (error) {
    errorActions(actionsType.FETCH_DETAIL_FAIL, error)
  }
}

export const removeIsLiked = productId => async (dispatch, getState) => {
  try {
    const { users } = getState()

    if (users.isSignedIn) {
      const calc = new CalcIsLiked(users.wishlist, productId)

      const updateWishlist = calc.removeFromWishlist()

      const { data } = await api.updateWishlist(users._id, updateWishlist)

      dispatch({
        type: actionsType.UPDATE_CART,
        payload: data.user
      })
    } else {
      const { wishlist } = users

      const calc = new CalcIsLiked(wishlist, productId)

      const updatedData = {
        ...users,
        wishlist: calc.removeFromWishlist()
      }

      dispatch({
        type: actionsType.UPDATE_WISHLIST,
        payload: updatedData
      })

      localStorage.setItem('guestProfile', JSON.stringify(updatedData))
    }
  } catch (error) {
    errorActions(actionsType.FETCH_DETAIL_FAIL, error)
  }
}

export const addIsCartIn = productId => async (dispatch, getState) => {
  try {
    const { users } = getState()

    if (users.isSignedIn) {
      const calc = new CalcCart(users.cart, productId)

      const updatedCart = calc.addToCart()

      const { data } = await api.updateCart(users._id, updatedCart)

      dispatch({
        type: actionsType.UPDATE_CART,
        payload: data.user
      })
    } else {
      const { cart } = users

      const calc = new CalcCart(cart, productId)

      const updatedData = {
        ...users,
        cart: calc.addToCart()
      }

      dispatch({
        type: actionsType.UPDATE_CART,
        payload: updatedData
      })

      localStorage.setItem('guestProfile', JSON.stringify(updatedData))
    }
  } catch (error) {
    errorActions(actionsType.FETCH_DETAIL_FAIL, error)
  }
}

export const removeIsCartIn = productId => async (dispatch, getState) => {
  try {
    const { users } = getState()

    if (users.isSignedIn) {
      const calc = new CalcCart(users.cart, productId)

      const updatedCart = calc.removeFromCart()

      const { data } = await api.updateCart(users._id, updatedCart)

      dispatch({
        type: actionsType.UPDATE_CART,
        payload: data.user
      })
    } else {
      const { cart } = users

      const calc = new CalcCart(cart, productId)

      const updatedData = {
        ...users,
        cart: calc.removeFromCart()
      }

      dispatch({
        type: actionsType.UPDATE_CART,
        payload: updatedData
      })

      localStorage.setItem('guestProfile', JSON.stringify(updatedData))
    }
  } catch (error) {
    errorActions(actionsType.FETCH_DETAIL_FAIL, error)
  }
}

export const deleteIsCartIn = productId => async (dispatch, getState) => {
  try {
    const { users } = getState()

    if (users.isSignedIn) {
      const calc = new CalcCart(users.cart, productId)

      const updatedCart = calc.deleteFromCart()

      const { data } = await api.updateCart(users._id, updatedCart)

      dispatch({
        type: actionsType.UPDATE_CART,
        payload: data.user
      })
    } else {
      const { cart } = users
      const calc = new CalcCart(cart, productId)

      const updatedData = {
        ...users,
        cart: calc.deleteFromCart()
      }

      dispatch({
        type: actionsType.UPDATE_CART,
        payload: updatedData
      })

      localStorage.setItem('guestProfile', JSON.stringify(updatedData))
    }
  } catch (error) {
    errorActions(actionsType.FETCH_DETAIL_FAIL, error)
  }
}
