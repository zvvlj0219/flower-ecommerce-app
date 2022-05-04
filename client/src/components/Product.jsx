import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import ImageArea from './ImageArea'

const imgStyle = {
  width: '90%',
  display: 'block',
  margin: '10px auto 0'
}

const Product = ({ item, isPrice }) => {
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
          <CardContent sx={{ height: isPrice ? '50px' : '30px' }}>
            <h3
              style={{
                fontSize: '1rem',
                lineHeight: '1rem',
                textAlign: 'center',
                margin: 'auto 0',
                position: 'relative'
              }}
            >
              {item.name}
            </h3>
            {
              isPrice && (
                <p
                  className='price_wrapper'
                  style={{
                    fontSize: '0.8rem',
                    position: 'absolute',
                    bottom: '0'
                  }}
                >
                  <span
                    style={{
                      color: 'dimgray'
                    }}
                  >
                    価格:
                  </span>
                  <span
                    className='price'
                    style={{
                      color: 'red'
                    }}
                  >
                    {item.price}
                  </span>
                  <span
                    style={{
                      color: 'red'
                    }}
                  >
                    円（税込）
                  </span>
                </p>
              )
            }
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

Product.defaultProps = {
  item: {},
  isPrice: true
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
  }),
  isPrice: PropTypes.bool
}

export default Product
