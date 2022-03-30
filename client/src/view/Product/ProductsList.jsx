import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './productsList.css'
import Grid from '@mui/material/Grid'
import { fetchInitialProducts, fetchAjaxProducts } from '../../redux/actions/productActions'

// import product
import Product from '../../components/Product'

const ProductsList = () => {
  const dispatch = useDispatch()

  console.log(useSelector(state => state.users))

  const [buttonClass, setbuttonClass] = useState()
  const [isLoaded, setisLoaded] = useState(false)

  const { list } = useSelector(state => state.products)

  const loadmore = useCallback(() => {
    if (!isLoaded) {
      setbuttonClass('hidden')
      dispatch(fetchAjaxProducts())
      setisLoaded(true)
      setTimeout(() => { setbuttonClass('') }, 1000)
    }
  }, [isLoaded, dispatch, setisLoaded, setbuttonClass])

  useEffect(() => {
    dispatch(fetchInitialProducts())
  }, [])

  return (
    <div className='productsList'>
      <Grid
        container
        spacing={3}
      >
        {
          list.map(item => (
            <Product
              key={item._id}
              item={item}
              isPrice={false}
            />
          ))
        }
      </Grid>
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
