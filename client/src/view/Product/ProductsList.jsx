import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './productsList.css'
import Grid from '@mui/material/Grid'
import { fetchInitialProducts, fetchAjaxProducts } from '../../redux/actions/productActions'

// import product
import Product from './Product'

const ProductsList = () => {
  const dispatch = useDispatch()

  // state
  const [products, setProducts] = useState([])
  const [buttonClass, setButtonClass] = useState('')

  // selector
  const { loading, list } = useSelector(state => state.products)

  // function
  const loadmore = useCallback(() => {
    setButtonClass('hidden')
    dispatch(fetchAjaxProducts(products))
  }, [dispatch, setButtonClass])

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
        <button type='button' onClick={loadmore}>もっとみる</button>
      </div>
    </div>
  )
}

export default ProductsList
