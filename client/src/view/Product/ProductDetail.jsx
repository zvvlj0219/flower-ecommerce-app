import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import LinkHistory from '../../components/LinkHistory'
import './productDetail.css'

import { fetchDetail, listFilter, addIsLiked, removeIsLiked, addIsCartIn } from '../../redux/actions/detailActions'
import ProductSlider from '../Slider/ProductSlider'

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
      dispatch(removeIsLiked(detail))
    } else {
      dispatch(addIsLiked(detail))
    }
    setisLiked(!isLiked)
  }

  const addToCart = () => {
    dispatch(addIsCartIn(detail))
    history.push('/cart')
  }

  // useEffect onload
  useEffect(() => {
    if (list.length === 0) {
      console.log(id)
      dispatch(fetchDetail(id))
    } else {
      dispatch(listFilter(
        list.filter(el => el._id === id)
      ))
    }
  }, [])

  // useEffect
  useEffect(() => {
    wishlist.forEach(item => {
      if (item._id === id) {
        setisLiked(true)
      }
    })
  }, [wishlist])

  const linkdata = [
    { page: 'ホーム', path: '/' },
    { page: `${detail.name}`, path: `/product-detail/${detail.name}/${id}` }
  ]

  return (
    <div className='productDetail'>
      {
        !loading ? (
          <>
            <LinkHistory linkdata={linkdata} />
            <h2 className='product_name'>
              {detail.name}
            </h2>
            <div className='grid'>
              <ProductSlider />
              <div className='description'>
                <h3>■商品説明</h3>
                {
                  detail ? (
                    <div>
                      <p className='text'>{detail.description}</p>
                      <p className='price_wrapper'>
                        <span>価格:</span>
                        <span className='price'>{detail.price}</span>
                        <span>円（税込）</span>
                      </p>
                    </div>
                  ) : ''
                }
                <h4>■店内在庫</h4>
                {
                  detail ? (
                    <p className='count'>{`残り ${detail.countInStock} 品`}</p>
                  ) : ''
                }
              </div>
              <div className='button_wrapper'>
                {
                  detail && (
                    <div>
                      <button
                        type='button'
                        className={`isLiked ${isLiked && 'active'}`}
                        onClick={toggleIsLiked}
                      >
                        {
                          isLiked ? (
                            <p>
                              <span>いいね!を外す</span>
                              <FavoriteOutlinedIcon />
                            </p>
                          ) : (
                            <p>
                              <span>いいね!</span>
                              <FavoriteBorderIcon />
                            </p>
                          )
                        }
                      </button>
                      <button
                        type='button'
                        className='isCartIn'
                        onClick={addToCart}
                      >
                        <p>
                          <span>カートに入れる</span>
                          <LocalGroceryStoreIcon />
                        </p>
                      </button>
                    </div>
                  )
                }
              </div>
            </div>
          </>
        ) : '..Loading'
      }
    </div>
  )
}

export default ProductDetail
