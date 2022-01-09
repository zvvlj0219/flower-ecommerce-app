import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addIsCartIn, removeIsCartIn, deleteIsCartIn } from '../../redux/actions/detailActions'

const Cart = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { cart } = useSelector(state => state.users)

  const addToCart = id => {
    dispatch(addIsCartIn(id))
  }

  const removeFromCart = id => {
    dispatch(removeIsCartIn(id))
  }

  const deleteFromCart = id => {
    dispatch(deleteIsCartIn(id))
  }

  const order = () => {
    history.push('/order')
  }

  return (
    <div className='wishlist'>
      <p>Cart</p>
      {
        cart.length > 0 ?
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
          )) : 'no product in your cart'
      }
      <div>
        {
          cart.length ?
            (
              <button
                type='button'
                onClick={order}
              >
                レジへ進む
              </button>
            ) : ''
        }
      </div>
    </div>
  )
}

export default Cart
