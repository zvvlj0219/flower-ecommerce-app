import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import OrderItem from '../../components/OrderItem'

const OrderHistory = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { order } = useSelector(state => state.users)

  console.log(order)
  return (
    <div className='order_history'>
      <h1>OrderHistory</h1>
      <div className='order_container'>
        {
          order.map(el => (
            <div
              key={el._id}
              className='order_wrapper'
            >
              <p>{el.orderDate}</p>
              <OrderItem orderItem={el.orderItem} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OrderHistory
