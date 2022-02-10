import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './productsList.css'
import Grid from '@mui/material/Grid'
import { fetchInitialProducts, fetchAjaxProducts } from '../../redux/actions/productActions'

// import product
import Product from './Product'

const ProductsList = () => {
  const dispatch = useDispatch()

  // state
  const [products, setProducts] = useState([])
  const [buttonClass, setbuttonClass] = useState()
  const [isLoaded, setisLoaded] = useState(false)

  // selector
  const { loading, list } = useSelector(state => state.products)

  // function
  const loadmore = useCallback(() => {
    if (!isLoaded) {
      setbuttonClass('hidden')
      dispatch(fetchAjaxProducts())
      setisLoaded(true)
      setTimeout(() => { setbuttonClass('') }, 1000)
    }
  }, [isLoaded, dispatch, setisLoaded, setbuttonClass])

  // useEffect onload
  useEffect(() => {
    dispatch(fetchInitialProducts())
  }, [])

  useEffect(() => {
    if (list.length > 0) {
      setProducts(list)
    }
  }, [list])

  // render
  return (
    <div className='productsList'>
      {
        !loading ? (
          <Grid
            container
            spacing={3}
          >
            <Product
              products={products}
            />
          </Grid>
        ) : ''
      }
      <div className={`button_wrapper ${buttonClass}`}>
        <button type='button' onClick={loadmore}>
          {
            isLoaded ? (
              <Link to='/all-products'>
                商品一覧を見る
              </Link>
            ) : 'もっと見る'
          }
        </button>
      </div>
    </div>
  )
}

export default ProductsList
