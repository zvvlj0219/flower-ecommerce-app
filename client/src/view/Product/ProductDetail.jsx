import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDetail, updateIsLiked, updateIsCartIn } from '../../redux/actions/detailActions'

const ProductDetail = () => {
  const { id } = useParams()
  const { list } = useSelector(state => state.products)
  const { detail } = useSelector(state => state.productDetail)
  const dispatch = useDispatch()

  // state
  const [detailData, setDetailData] = useState(
    list.length > 0 ? list.filter(el => el._id === id) : null
  )

  const [isLiked, setisLiked] = useState(
    detailData ? detailData[0].isLiked : ''
  )

  const [isCartIn, setisCartIn] = useState(
    detailData ? detailData[0].isCartIn : false
  )

  // function
  const toggleIsLiked = () => {
    dispatch(updateIsLiked(id, !detailData[0].isLiked))
    setisLiked(!isLiked)
  }

  const addToCart = () => {
    if (isCartIn) {
      console.log('link cart')
    } else {
      dispatch(updateIsCartIn(id))
      setisCartIn(true)
    }
  }

  // useEffect
  useEffect(() => {
    if (!detailData && !detail) {
      dispatch(fetchDetail(id))
    }
    if (detail) {
      setDetailData(detail)
      setisLiked(detail[0].isLiked)
      setisCartIn(detail[0].isCartIn)
    }
  }, [detail, detailData])

  return (
    <div className='productDetail'>
      <p>ProductDetail</p>
      {
        detailData ?
          (
            <div>
              <p>{detailData[0].name}</p>
            </div>
          ) : '..loading'
      }
      <button
        type='button'
        onClick={toggleIsLiked}
      >
        {`wishlist : ${isLiked}`}
      </button>
      <button
        type='button'
        onClick={addToCart}
      >
        {
          isCartIn ? 'チェックアウト' : 'カートに入れる'
        }
      </button>
    </div>
  )
}

export default ProductDetail
