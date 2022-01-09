import { Link } from 'react-router-dom'

const OrderComplete = () => {
  console.log('order complete')
  return (
    <div>
      <div>注文ありがとうございます。</div>
      <Link
        to='/'
      >
        ショッピングを続ける
      </Link>
    </div>
  )
}

export default OrderComplete
