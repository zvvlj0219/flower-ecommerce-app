import PropTypes from 'prop-types'
import ImageArea from './ImageArea'

const OrderItem = ({ orderItem, style }) => {
  return (
    <>
      {
        orderItem.map(item => (
          <div
            key={item._id}
            className='order_item'
          >
            <p className='item_name'>{item.name}</p>
            <ImageArea
              path={item.imageUrl[0]}
              style={style}
              className='productImage'
            />
          </div>
        ))
      }
    </>
  )
}

OrderItem.defaultProps = {
  orderItem: [],
  style: {}
}

OrderItem.propTypes = {
  orderItem: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.objectOf(PropTypes.string)
}

export default OrderItem
