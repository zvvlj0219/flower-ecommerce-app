import PropTypes from 'prop-types'

const Product = ({ products }) => {
  console.log(products)
  return (
    <div>
      {
        products ?
          products.map(el => (
            <p key={el._id}>{el.name}</p>
          ))
          : ''
      }
    </div>
  )
}

Product.defaultProps = {
  products: {}
}

Product.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}

export default Product
