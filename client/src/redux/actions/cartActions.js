import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'
import CalcCart from '../../module/calcCart'

export const addIsCartIn = detail => async (dispatch, getState) => {
  try {
    const { users } = getState()

    if (users.isSignedIn) {
      const calc = new CalcCart(users.cart, detail)

      const updatedCart = calc.addToCart()

      const { data } = await api.updateCart(users._id, updatedCart)

      dispatch({
        type: actionsType.UPDATE_CART,
        payload: {
          ...data.user,
          isSignedIn: true
        }
      })
    } else {
      const { cart } = users

      const calc = new CalcCart(cart, detail)

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
    console.log(error)
  }
}

export const removeIsCartIn = detail => async (dispatch, getState) => {
  try {
    const { users } = getState()

    if (users.isSignedIn) {
      const calc = new CalcCart(users.cart, detail)

      const updatedCart = calc.removeFromCart()

      const { data } = await api.updateCart(users._id, updatedCart)

      dispatch({
        type: actionsType.UPDATE_CART,
        payload: {
          ...data.user,
          isSignedIn: true
        }
      })
    } else {
      const { cart } = users

      const calc = new CalcCart(cart, detail)

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
    console.log(error)
  }
}

export const deleteIsCartIn = detail => async (dispatch, getState) => {
  try {
    const { users } = getState()

    if (users.isSignedIn) {
      const calc = new CalcCart(users.cart, detail)

      const updatedCart = calc.deleteFromCart()

      const { data } = await api.updateCart(users._id, updatedCart)

      dispatch({
        type: actionsType.UPDATE_CART,
        payload: data.user
      })
    } else {
      const { cart } = users
      const calc = new CalcCart(cart, detail)

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
    console.log(error)
  }
}
