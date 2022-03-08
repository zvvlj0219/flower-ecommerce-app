import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import ImageArea from './ImageArea'

const imgStyle = {
  width: '160px',
  height: '160px',
  display: 'block',
  margin: '10px auto'
}

const Product = ({ item }) => {
  const history = useHistory()

  const productPage = (name, id) => {
    history.push(`/product-detail/${name}/${id}`)
  }

  return (
    <Grid
      item
      xs={6}
      md={4}
      lg={3}
      className='product'
      onClick={() => productPage(item.name, item._id)}
    >
      <Card>
        <CardActionArea>
          <CardMedia>
            <ImageArea
              path={item.imageUrl[0]}
              style={imgStyle}
            />
          </CardMedia>
          <CardContent>
            <h3>{item.name}</h3>
            <p className='price_wrapper'>
              <span>価格:</span>
              <span className='price'>{item.price}</span>
              <span>円（税込）</span>
            </p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

Product.defaultProps = {
  item: {}
}

Product.propTypes = {
  item: PropTypes.shape({
    countInStock: PropTypes.number,
    createdAt: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    price: PropTypes.number,
    updatedAt: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string
  })
}

export default Product
