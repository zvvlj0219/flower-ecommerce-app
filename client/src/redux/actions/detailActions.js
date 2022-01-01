import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'
import errorActions from './errorActions'

export const fetchDetail = id => async dispatch => {
  try {
    dispatch({ type: actionsType.FETCH_DETAIL_REQUEST })

    const { data } = await api.fetchDetail(id)

    dispatch({
      type: actionsType.FETCH_DETAIL_SUCCESS,
      payload: data.result
    })
  } catch (error) {
    errorActions(actionsType.FETCH_DETAIL_FAIL, error)
  }
}

export const updateIsLiked = (id, isLiked) => async dispatch => {
  try {
    const { data } = await api.updateIsLiked(id, isLiked)

    dispatch({
      type: actionsType.UPDATE_DETAIL,
      payload: data.result
    })
  } catch (error) {
    errorActions(actionsType.FETCH_DETAIL_FAIL, error)
  }
}

export const updateIsCartIn = id => async dispatch => {
  try {
    console.log(id)

    const { data } = await api.updateIsCartIn(id)

    dispatch({
      type: actionsType.UPDATE_DETAIL,
      payload: data.result
    })
  } catch (error) {
    errorActions(actionsType.FETCH_DETAIL_FAIL, error)
  }
}
