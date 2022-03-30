import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import OrderItem from '../../components/OrderItem'
import LinkHistory from '../../components/LinkHistory'
import './orderHistory.css'

const linkdata = [
  { page: 'ホーム', path: '/' },
  { page: 'アカウントサービス', path: '/account-service' },
  { page: '注文履歴', path: '/account-service/order-history' }
]

const OrderHistory = () => {
  const history = useHistory()

  const { order } = useSelector(state => state.users)

  const imageStyle = {
    display: 'block',
    margin: '10px',
    width: '100px',
    height: '100px'
  }

  const getOrderDate = useCallback(date => {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = d.getMonth()
    const day = d.getDate()
    return `${year}年${month}月${day}日`
  }, [order])

  return (
    <div className='order_history'>
      <LinkHistory linkdata={linkdata} />
      <h1>注文履歴</h1>
      <div className='order_container'>
        {
          order.map(el => (
            <div
              key={el._id}
              className='order_wrapper'
            >
              <p className='order_date'>
                {getOrderDate(el.orderDate)}
              </p>
              <OrderItem orderItem={el.orderItem} style={imageStyle} />
            </div>
          ))
        }
      </div>
      <button
        type='button'
        onClick={() => history.push('/account-service')}
      >
        戻る
      </button>
    </div>
  )
}

export default OrderHistory
