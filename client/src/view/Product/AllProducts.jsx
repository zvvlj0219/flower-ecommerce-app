import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import { fetchAllProducts } from '../../redux/actions/productActions'
import LinkHistory from '../../components/LinkHistory'
import Product from '../../components/Product'
import './allproducts.css'

const linkdata = [
  { page: 'ホーム', path: '/' },
  { page: '商品一覧', path: '/all-products' }
]

const AllProducts = () => {
  const dispatch = useDispatch()

  const { list: allproducts } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  return (
    <div className='allproducts_container'>
      <LinkHistory linkdata={linkdata} />
      <div className='products_wrapper'>
        <Grid
          container
          spacing={2}
        >
          {
            allproducts.length > 0 ? (
              allproducts.map(item => (
                <Product
                  item={item}
                  key={item._id}
                />
              ))
            ) : (
              <h3>Loading ...</h3>
            )
          }
        </Grid>
      </div>
    </div>
  )
}

export default AllProducts
