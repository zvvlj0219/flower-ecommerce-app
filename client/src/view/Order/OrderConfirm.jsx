import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Checkout = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  // selector
  const { cart } = useSelector(state => state.users)

  const orderConfirmation = useCallback(() => {
    console.log(dispatch)
    history.push('/order/checkout/complete')
  })

  useEffect(() => {}, [])

  console.log('checkout')
  return (
    <div>
      <p>chekcout</p>
      <div>
        {
          cart.map(item => (
            <div key={item._id}>
              <p>{item._id}</p>
            </div>
          ))
        }
      </div>
      <div>
        <button
          type='button'
          onClick={orderConfirmation}
        >
          注文確定
        </button>
      </div>
    </div>
  )
}

export default Checkout
