import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'
import CalcIsLiked from '../../module/calcIsLiked'

export const addIsLiked = detail => async (dispatch, getState) => {
  try {
    const { users } = getState()

    if (users.isSignedIn) {
      const calc = new CalcIsLiked(users.wishlist, detail)

      const updatedWishlist = calc.addToWishlist()

      console.log(updatedWishlist)

      const { data } = await api.updateWishlist(users._id, updatedWishlist)

      dispatch({
        type: actionsType.UPDATE_WISHLIST,
        payload: {
          ...data.user,
          isSignedIn: true
        }
      })
    } else {
      const { wishlist } = users

      const calc = new CalcIsLiked(wishlist, detail)

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
    console.log(error)
  }
}

export const removeIsLiked = detail => async (dispatch, getState) => {
  try {
    const { users } = getState()

    if (users.isSignedIn) {
      const calc = new CalcIsLiked(users.wishlist, detail)

      const updateWishlist = calc.removeFromWishlist()

      const { data } = await api.updateWishlist(users._id, updateWishlist)

      dispatch({
        type: actionsType.UPDATE_CART,
        payload: {
          ...data.user,
          isSignedIn: true
        }
      })
    } else {
      const { wishlist } = users

      const calc = new CalcIsLiked(wishlist, detail)

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
    console.log(error)
  }
}
