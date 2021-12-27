import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'
import errorActions from './errorActions'

export const fetchInitialProducts = () => async dispatch => {
  try {
    console.log('disptch')

    dispatch({ type: actionsType.FETCH_PRODUCTS_REQUEST })

    console.log('disptch')

    const { data } = await api.initialProducts()

    console.log(data)

    dispatch({
      type: actionsType.FETCH_PRODUCTS_SUCCESS,
      payload: data
    })
  } catch (error) {
    errorActions(actionsType.FETCH_PRODUCTS_FAIL, error)
  }
}

export const fetchAjaxProducts = () => {
  return []
}
