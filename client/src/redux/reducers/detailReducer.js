import * as actionsType from '../constants/actionsType'

// initial state
import initialState from '../../store/initialState'

export const fetchDetailReducer = (state = initialState.productDetail, action) => {
  switch (action.type) {
    case actionsType.FETCH_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        detail: null
      }
    case actionsType.FETCH_DETAIL_SUCCESS:
      console.log({
        ...state,
        loading: false,
        detail: action.payload
      })
      return {
        ...state,
        loading: false,
        detail: action.payload
      }
    case actionsType.FETCH_DETAIL_FAIL:
      console.log('FETCH_DETAIL_FAIL')
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}
