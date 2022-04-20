import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'

export const fetchInitialProducts = () => async dispatch => {
  try {
    dispatch({ type: actionsType.FETCH_PRODUCTS_REQUEST })

    const { data } = await api.initialProducts()

    dispatch({
      type: actionsType.FETCH_PRODUCTS_SUCCESS,
      payload: data.result
    })
  } catch (error) {
    console.log(error)
  }
}

export const fetchAjaxProducts = () => async (dispatch, getState) => {
  try {
    const { products } = getState()
    const { list } = products

    const id = list.map(product => product._id)

    const { data } = await api.ajaxProducts(id)

    dispatch({
      type: actionsType.AJAX_PRODUCTS,
      payload: [
        ...products.list,
        ...data.result
      ]
    })
  } catch (error) {
    console.log(error)
  }
}

export const fetchAllProducts = () => async dispatch => {
  try {
    dispatch({ type: actionsType.FETCH_PRODUCTS_REQUEST })

    const { data } = await api.allProducts()

    dispatch({
      type: actionsType.FETCH_PRODUCTS_SUCCESS,
      payload: data.productList
    })
  } catch (error) {
    console.log(error)
  }
}
