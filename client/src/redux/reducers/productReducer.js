import * as actionsType from '../constants/actionsType'

// initial state
import initialState from '../../store/initialState'

export const fetchProductReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case actionsType.FETCH_PRODUCTS_REQUEST:
      console.log('FETCH_PRODUCTS_REQUEST')
      return {
        loading: true,
        products: []
      }
    case actionsType.FETCH_PRODUCTS_SUCCESS:
      console.log('FETCH_PRODUCTS_SUCCESS')
      return {
        loading: false,
        products: action.payload
      }
    case actionsType.FETCH_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const a = 'a'
