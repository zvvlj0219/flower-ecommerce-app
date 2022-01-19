import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'

// import cherryblossom from '../../assets/cherryblossom.png'
import sofia from '../../assets/sofia.png'

const Product = ({ products }) => {
  const history = useHistory()

  const productPage = (name, id) => {
    history.push(`/product-detail/${name}/${id}`)
  }

  return (
    <>
      {
        products.map(items => (
          <Grid
            item
            xs={6}
            md={4}
            lg={3}
            key={items._id}
            className='product'
            onClick={() => productPage(items.name, items._id)}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt={items.name}
                  image={sofia}
                />
                <CardContent>
                  <h3>{items.name}</h3>
                  <p className='price_wrapper'>
                    <span>価格:</span>
                    <span className='price'>{items.price}</span>
                    <span>円（税込）</span>
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      }
    </>
  )
}

Product.defaultProps = {
  products: []
}

Product.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}

export default Product
