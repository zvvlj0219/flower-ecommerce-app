import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDetail, updateIsLiked } from '../../redux/actions/detailActions'

const ProductDetail = () => {
  const { id } = useParams()
  const { list } = useSelector(state => state.products)
  const { detail } = useSelector(state => state.productDetail)
  const dispatch = useDispatch()

  // state
  const [detailData, setDetailData] = useState(
    list.length > 0 ? list.filter(el => el._id === id) : null
  )

  // const [isLiked, setisLiked] = useState(null)
  const [isLiked, setisLiked] = useState(
    detailData ? detailData[0].isLiked : ''
  )

  // function
  const toggleIsLiked = () => {
    dispatch(updateIsLiked(id, !detailData[0].isLiked))
    setisLiked(!isLiked)
  }

  useEffect(() => {
    if (!detailData && !detail) {
      dispatch(fetchDetail(id))
    }
    if (detail) {
      setDetailData(detail)
      setisLiked(detail[0].isLiked)
    }
  }, [detail, detailData])

  return (
    <div>
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
    </div>
  )
}

export default ProductDetail
