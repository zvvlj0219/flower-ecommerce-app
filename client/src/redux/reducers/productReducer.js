import * as actionsType from '../constants/actionsType'

// initial state
import initialState from '../../store/initialState'

export const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case actionsType.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        list: []
      }
    case actionsType.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...action.payload]
      }
    case actionsType.FETCH_PRODUCTS_FAIL:
      console.log('FETCH_PRODUCTS_FAIL')
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actionsType.AJAX_PRODUCTS:
      return {
        ...state,
        loading: false,
        list: [...action.payload]
      }
    default:
      return state
  }
}
