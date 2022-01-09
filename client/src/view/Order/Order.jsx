import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addIsCartIn, removeIsCartIn, deleteIsCartIn } from '../../redux/actions/detailActions'

const Order = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  // selector
  const { cart, information } = useSelector(state => state.users)

  // function
  const checkout = useCallback(() => {
    history.push('/order/checkout')
  })

  const addToCart = id => {
    dispatch(addIsCartIn(id))
  }

  const removeFromCart = id => {
    dispatch(removeIsCartIn(id))
  }

  const deleteFromCart = id => {
    dispatch(deleteIsCartIn(id))
  }

  useEffect(() => {}, [])

  return (
    <div>
      <p>商品 ユーザー情報</p>
      <div>
        {
          cart.map(item => (
            <div key={item._id}>
              <p>{item._id}</p>
              <div className='flex'>
                <button
                  type='button'
                  onClick={() => removeFromCart(item._id)}
                >
                  {
                    item.qty === 1 ?
                      '削除' : '-'
                  }
                </button>
                <p>{item.qty}</p>
                <button
                  type='button'
                  onClick={() => addToCart(item._id)}
                >
                  +
                </button>
              </div>
              <button type='button' onClick={() => deleteFromCart(item._id)}>削除</button>
              <hr />
            </div>
          ))
        }
      </div>
      <hr />
      <div>
        <div>{`client: ${information.client}`}</div>
        <div>{`address: ${information.address}`}</div>
        <div>{`payment: ${information.payment}`}</div>
        <button
          type='button'
        >
          編集
        </button>
      </div>
      <button
        type='button'
        onClick={checkout}
      >
        注文確認
      </button>
    </div>
  )
}

export default Order
