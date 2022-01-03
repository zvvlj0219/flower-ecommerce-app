import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDetail, listFilter, updateIsLiked, updateIsCartIn } from '../../redux/actions/detailActions'

const ProductDetail = () => {
  const { id } = useParams()
  const { list } = useSelector(state => state.products)
  const { detail, loading } = useSelector(state => state.productDetail)
  const dispatch = useDispatch()

  // function
  const toggleIsLiked = isLiked => {
    dispatch(updateIsLiked(id, !isLiked))
  }

  const addToCart = () => {
    if (detail.isCartIn) {
      console.log('link cart')
    } else {
      dispatch(updateIsCartIn(id))
    }
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
                onClick={() => toggleIsLiked(detail.isLiked)}
              >
                { detail.isLiked ? 'wishlist ❤' : 'wishlist ♡' }
              </button>
              <button
                type='button'
                onClick={addToCart}
              >
                { detail.isCartIn ? 'チェックアウト' : 'カートに入れる' }
              </button>
            </>
          )
        }
      </div>
    </div>
  )
}

export default ProductDetail
