import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Product = ({ products }) => {
  return (
    <div>
      {
        products ?
          products.map(el => (
            <Link
              to={`/product-detail/${el.name}/${el._id}`}
              key={el._id}
            >
              {el.name}
            </Link>
          ))
          : ''
      }
    </div>
  )
}

Product.defaultProps = {
  products: []
}

Product.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}

export default Product
