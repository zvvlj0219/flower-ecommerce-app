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
