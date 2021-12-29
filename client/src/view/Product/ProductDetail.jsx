import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDetail } from '../../redux/actions/detailActions'

const ProductDetail = () => {
  const { id } = useParams()
  const { list } = useSelector(state => state.products)
  const { detail } = useSelector(state => state.productDetail)
  const dispatch = useDispatch()
  const [detailData, setDetailData] = useState(
    list.length > 0 ? list.filter(el => el._id === id) : null
  )

  useEffect(() => {
    if (!detailData) {
      dispatch(fetchDetail(id))
    }
  }, [])

  useEffect(() => {
    if (!detailData) {
      setDetailData(detail)
    }
  }, [detail])

  return (
    <div>
      <p>ProductDetail</p>
      {
        detailData ?
          (
            <div>
              <p>{detailData[0].name}</p>
            </div>
          ) : ''
      }
      <button type='button'>
        wishlist
      </button>
    </div>
  )
}

export default ProductDetail
