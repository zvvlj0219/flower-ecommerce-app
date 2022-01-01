import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitialProducts, fetchAjaxProducts } from '../../redux/actions/productActions'

// import product
import Product from './Product'

const ProductsList = () => {
  const dispatch = useDispatch()

  // state
  const [products, setProducts] = useState([])

  // selector
  const { loading, list, error } = useSelector(state => state.products)

  // console.log(products)

  // function
  const loadmore = useCallback(() => {
    dispatch(fetchAjaxProducts(products))
  }, [products])

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
      <p>products map</p>
      {
        error && <p>{error}</p>
      }
      <Product
        products={products}
      />
      {
        loading && <p>Loading...</p>
      }
      <button type='button' onClick={loadmore}>もっとみる</button>
    </div>
  )
}

export default ProductsList
