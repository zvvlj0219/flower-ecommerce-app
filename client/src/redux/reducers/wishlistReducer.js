import * as actionsType from '../constants/actionsType'

// initial state
import initialState from '../../store/initialState'

export const wishlistReducer = (state = initialState.wishlist, action) => {
  switch (action.type) {
    case actionsType.FETCH_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionsType.FETCH_WISHLIST_SUCCESS: {
      console.log({
        ...state,
        list: action.payload
      })
      return {
        ...state,
        list: action.payload
      }
    }
    case actionsType.FETCH_WISHLIST_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
