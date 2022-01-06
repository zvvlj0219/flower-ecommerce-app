import * as actionsType from '../constants/actionsType'

// initial state
import initialState from '../../store/initialState'

export const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case actionsType.SIGN_IN:
      return action.payload
    case actionsType.LISTEN_AUTH:
      console.log(action.payload)
      return action.payload
    case actionsType.INIT_AUTH:
      return action.payload
    case actionsType.LOGOUT:
      return initialState.users
    default:
      return state
  }
}