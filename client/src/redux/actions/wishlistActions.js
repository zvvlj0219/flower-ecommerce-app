import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'
import errorActions from './errorActions'

export const fetchWishlist = () => async dispatch => {
  try {
    dispatch({ type: actionsType.FETCH_WISHLIST_REQUEST })

    const { data } = await api.fetchWishlist()

    dispatch({
      type: actionsType.FETCH_WISHLIST_SUCCESS,
      payload: data.result
    })
  } catch (error) {
    errorActions(actionsType.FETCH_WISHLIST_FAIL, error)
  }
}
