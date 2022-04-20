import * as actionsType from '../constants/actionsType'

// initial state
import initialState from '../../store/initialState'

export const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case actionsType.SIGN_IN:
      return {
        ...action.payload,
        isSignedIn: true
      }
    case actionsType.LISTEN_AUTH:
      return {
        ...action.payload,
        isSignedIn: true
      }
    case actionsType.LISTEN_AUTH_REQUEST:
      return {
        ...state,
        isSignedIn: true
      }
    case actionsType.UPDATE_WISHLIST:
      return action.payload
    case actionsType.UPDATE_CART:
      return action.payload
    case actionsType.INIT_AUTH:
      return {
        ...action.payload
      }
    case actionsType.GUEST_INFO:
      return {
        ...state,
        information: action.payload
      }
    case actionsType.ORDER_CONFIRM_REQUEST:
      return {
        ...state,
        isSignedIn: action.payload
      }
    case actionsType.ORDER_CONFIRM_SUCCESS: {
      const { _id } = action.payload
      if (_id) {
        return {
          ...action.payload,
          isSignedIn: true
        }
      }
      return {
        ...state,
        ...action.payload,
        isSignedIn: false
      }
    }
    case actionsType.EDIT_ACCOUNT:
      return {
        ...action.payload,
        isSignedIn: true
      }
    case actionsType.LOGOUT:
      return initialState.users
    default:
      return state
  }
}
