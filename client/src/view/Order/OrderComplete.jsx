import { Link } from 'react-router-dom'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import oc1 from '../../assets/fv/oc_1.jpg'

const OrderComplete = () => {
  return (
    <div className='order_complete'>
      <div className='text'>
        <p>ご注文ありがとうございます。</p>
        <Link
          to='/'
        >
          ショッピングを続ける
          <ShoppingCartCheckoutIcon
            sx={{
              fontSize: '2rem'
            }}
          />
        </Link>
      </div>
      <img
        src={oc1}
        alt=''
      />
    </div>
  )
}

export default OrderComplete
