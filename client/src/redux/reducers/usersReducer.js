import * as actionsType from '../constants/actionsType'

// initial state
import initialState from '../../store/initialState'

export const usersReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case actionsType.SIGN_IN:
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}
