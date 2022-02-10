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

export const uploadProductToServer = async productData => {
  const { imageUrl } = productData

  if (!imageUrl) return

  try {
    const formData = new FormData()

    const imageNameArray = []

    for (let i = 0; i < imageUrl.length; i += 1) {
      formData.append('upload-input-name', imageUrl[i])
      imageNameArray.push(`upload-input-name-${imageUrl[i].name}`)
    }

    api.uploadImageToServer(formData)

    await api.uploadProduct({
      ...productData,
      imageUrl: imageNameArray
    })
  } catch (error) {
    console.log(error)
  }
}
