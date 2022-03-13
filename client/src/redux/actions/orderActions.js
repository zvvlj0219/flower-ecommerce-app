import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'

export const orderConfirm = history => async (dispatch, getState) => {
  try {
    dispatch({ type: actionsType.ORDER_CONFIRM_REQUEST })

    const { users } = getState()
    const { _id, cart } = users

    const { data } = await api.orderConfirm(_id, cart)

    dispatch({
      type: actionsType.ORDER_CONFIRM_SUCCESS,
      payload: data.user
    })

    history.push('/order/complete')
  } catch (err) {
    history.push('/cart')
    alert('処理に失敗しました')
  }
}
