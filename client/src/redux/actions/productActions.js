import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'
import errorActions from './errorActions'

export const fetchInitialProducts = () => async dispatch => {
  try {
    dispatch({ type: actionsType.FETCH_PRODUCTS_REQUEST })

    const { data } = await api.initialProducts()

    dispatch({
      type: actionsType.FETCH_PRODUCTS_SUCCESS,
      payload: data.result
    })
  } catch (error) {
    errorActions(actionsType.FETCH_PRODUCTS_FAIL, error)
  }
}

export const fetchAjaxProducts = presentProducts => async (dispatch, getState) => {
  try {
    const { products } = getState()

    const id = presentProducts.map(product => product._id)

    const { data } = await api.ajaxProducts(id)

    dispatch({
      type: actionsType.AJAX_PRODUCTS,
      payload: [
        ...products.list,
        ...data.result
      ]
    })
  } catch (error) {
    errorActions(actionsType.FETCH_PRODUCTS_FAIL, error)
  }
}
