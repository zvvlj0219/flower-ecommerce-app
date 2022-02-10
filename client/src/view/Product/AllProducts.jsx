import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import Product from './Product'
import * as api from '../../api/index'
import './allproducts.css'

const AllProducts = () => {
  const [products, setProducts] = useState([])

  const fecthAllProducts = async () => {
    const { data } = await api.allProducts()
    setProducts(data.productList)
  }

  console.log(products)

  useEffect(() => {
    fecthAllProducts()
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
        products.length > 0 ? (
          <div className='products_wrapper'>
            <Grid
              container
              spacing={3}
            >
              <Product
                products={products}
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
