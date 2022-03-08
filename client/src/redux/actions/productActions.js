import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'
import errorActions from './errorActions'
// import { loadEnd, loadingNow } from './loadingAction'

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
    errorActions(actionsType.FETCH_PRODUCTS_FAIL, error)
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
    errorActions(actionsType.FETCH_PRODUCTS_FAIL, error)
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
    errorActions(actionsType.FETCH_PRODUCTS_FAIL, error)
  }
}

export const uploadProductToServer = async productData => {
  const {
    name,
    description,
    price,
    countInStock,
    imageUrl,
    fileList
  } = productData

  if (!fileList) return

  try {
    const formData = new FormData()

    for (let i = 0; i < fileList.length; i += 1) {
      formData.append('upload-input-name', fileList[i])
    }

    api.uploadImageToServer(formData)

    const res = await api.uploadProduct({
      name,
      description,
      price,
      countInStock,
      imageUrl
    })
    return res
  } catch (error) {
    return { message: 'upload failed' }
  }
}
