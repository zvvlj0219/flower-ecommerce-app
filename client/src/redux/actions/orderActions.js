import * as actionsType from '../constants/actionsType'
import * as api from '../../api/index'

export const orderConfirm = history => async (dispatch, getState) => {
  try {
    const { users } = getState()
    const { _id, cart, isSignedIn } = users

    if (isSignedIn) {
      dispatch({
        type: actionsType.ORDER_CONFIRM_REQUEST,
        payload: true
      })
    } else {
      dispatch({
        type: actionsType.ORDER_CONFIRM_REQUEST,
        payload: false
      })
    }

    const { data } = await api.orderConfirm(_id, cart)
    console.log(data)

    dispatch({
      type: actionsType.ORDER_CONFIRM_SUCCESS,
      payload: data.user
    })

    history.push('/order/complete')
  } catch (err) {
    if (err.response.data.message === 'stock error') {
      history.push('/cart')
      alert('商品の在庫が足りないので処理を実行できません')
      return
    }
    history.push('/cart')
    alert('処理に失敗しました')
  }
}
