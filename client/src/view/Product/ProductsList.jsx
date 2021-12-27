import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitialProducts, fetchAjaxProducts } from '../../redux/actions/productActions'

// import product
import Product from './Product'

const ProductsList = () => {
  const dispatch = useDispatch()
  const pstate = useSelector(state => state.products)
  // state
  const [products, setProducts] = useState([])

  // function
  const loadmore = useCallback(() => {
    const additionalProducts = fetchAjaxProducts()
    console.log(additionalProducts)
    console.log(
      ...products,
      ...additionalProducts
    )
    setProducts(
      ...products,
      ...additionalProducts
    )
  }, [setProducts])

  // useEffect
  useEffect(() => {
    console.log('onload useEffect')
    dispatch(fetchInitialProducts())
    console.log(pstate)
  }, [])

  // render
  return (
    <div className='productsList'>
      <p>products map</p>
      <Product />
      <button type='button' onClick={loadmore}>もっとみる</button>
    </div>
  )
}

export default ProductsList
