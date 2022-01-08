import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { fetchDetail, listFilter, addIsLiked, removeIsLiked, addIsCartIn } from '../../redux/actions/detailActions'

const ProductDetail = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  // product id
  const { id } = useParams()

  // store
  const { list } = useSelector(state => state.products)
  const { detail, loading } = useSelector(state => state.productDetail)
  const { wishlist } = useSelector(state => state.users)

  // state
  const [isLiked, setisLiked] = useState(false)

  // function
  const toggleIsLiked = () => {
    if (isLiked) {
      dispatch(removeIsLiked(id))
    } else {
      dispatch(addIsLiked(id))
    }
    setisLiked(!isLiked)
  }

  const addToCart = () => {
    dispatch(addIsCartIn(id))
    history.push('/cart')
  }

  // useEffect onload
  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchDetail(id))
    } else {
      dispatch(listFilter(
        list.filter(el => el._id === id)
      ))
    }
  }, [])

  // useEffect
  useEffect(() => {
    wishlist.forEach(productId => {
      if (productId === id) {
        setisLiked(true)
      }
    })
  }, [wishlist])

  return (
    <div className='productDetail'>
      <p>ProductDetail</p>
      <div>
        { loading && (
          <p>...loading</p>
        )}
        {
          detail && (
            <>
              <div>
                <p>{detail._id}</p>
                <p>{detail.name}</p>
              </div>
              <button
                type='button'
                onClick={toggleIsLiked}
              >
                {
                  isLiked ?
                    'wishlist ❤' : 'wishlist ♡'
                }
              </button>
              <button
                type='button'
                onClick={addToCart}
              >
                カートに入れる
              </button>
            </>
          )
        }
      </div>
    </div>
  )
}

export default ProductDetail
