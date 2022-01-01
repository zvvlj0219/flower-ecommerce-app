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
  const [detailData, setdetailData] = useState(
    list.length > 0 ? list.filter(el => el._id === id) : []
  )
  const [isLiked, setisLiked] = useState(false)
  const [isCartIn, setisCartIn] = useState(false)

  // function
  const toggleIsLiked = () => {
    dispatch(updateIsLiked(id, !isLiked))
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

  useEffect(() => {
    dispatch(fetchDetail(id))
  }, [])

  useEffect(() => {
    if (detail.length > 0) {
      setdetailData(detail)
      setisLiked(detail[0].isLiked)
      setisCartIn(detail[0].isCartIn)
    }
  }, [detail])

  // stateを生かせていない、毎回フェッチしている
  // その分ロードがあり、レンダリングもぎこちない

  return (
    <div className='productDetail'>
      <p>ProductDetail</p>
      {
        detailData.length > 0 ?
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
        {`wishlist : ${isLiked ? '❤' : '♡'}`}
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
