import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import { fetchAllProducts } from '../../redux/actions/productActions'
import Product from './Product'
import './allproducts.css'

const AllProducts = () => {
  const dispatch = useDispatch()

  const { list: allproducts } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  return (
    <div className='allproducts_container'>
      <div className='link_wrapper'>
        <p>
          <Link
            to='/'
          >
            ホーム
          </Link>
          <span>&rang;</span>
          <Link
            to='/all-products'
          >
            商品一覧
          </Link>
        </p>
      </div>
      {
        allproducts.length > 0 ? (
          <div className='products_wrapper'>
            <Grid
              container
              spacing={3}
            >
              <Product
                products={allproducts}
              />
            </Grid>
          </div>
        ) : (
          <p>Loading ...</p>
        )
      }
    </div>
  )
}

export default AllProducts
