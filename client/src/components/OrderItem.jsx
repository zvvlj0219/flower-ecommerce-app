import PropTypes from 'prop-types'
import ImageArea from './ImageArea'

const OrderItem = ({ orderItem }) => {
  return (
    <>
      {
        orderItem.map(item => (
          <div
            key={item._id}
            className='order_item'
          >
            <p>{item.name}</p>
            <ImageArea
              path={item.imageUrl[0]}
              style={{
                display: 'block',
                margin: '10px',
                width: '50px',
                height: '50px'
              }}
              className='productImage'
            />
          </div>
        ))
      }
    </>
  )
}

OrderItem.defaultProps = {
  orderItem: []
}

OrderItem.propTypes = {
  orderItem: PropTypes.arrayOf(PropTypes.object)
}

export default OrderItem
