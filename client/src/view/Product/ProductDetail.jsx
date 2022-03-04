import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import LinkHistory from '../../components/LinkHistory'
import './productDetail.css'
import { fetchDetail, addIsLiked, removeIsLiked, addIsCartIn } from '../../redux/actions/detailActions'
import ProductSlider from '../Slider/ProductSlider'

const ProductDetail = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()

  const { detail, loading } = useSelector(state => state.productDetail)
  const { wishlist } = useSelector(state => state.users)

  const [isLiked, setisLiked] = useState(false)
  const [imageData, setImageData] = useState([])

  const toggleIsLiked = useCallback(() => {
    if (isLiked) {
      dispatch(removeIsLiked(detail))
    } else {
      dispatch(addIsLiked(detail))
    }
    setisLiked(!isLiked)
  }, [isLiked, detail])

  const addToCart = useCallback(() => {
    dispatch(addIsCartIn(detail))
    history.push('/cart')
  }, [detail])

  const fetchImage = useCallback(() => {
    for (let i = 0; i < detail.imageUrl?.length; i += 1) {
      import(`../../assets/product/${detail.imageUrl[i]}`)
        .then(module => {
          setImageData(arr => {
            return [
              ...arr,
              {
                id: i,
                path: module.default
              }
            ]
          })
        })
    }
  }, [detail, imageData, setImageData])

  useEffect(() => {
    dispatch(fetchDetail(id))
  }, [])

  useEffect(() => {
    wishlist.forEach(item => {
      if (item._id === id) {
        setisLiked(true)
      }
    })
  }, [wishlist])

  useEffect(() => {
    fetchImage()
  }, [detail])

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
              <ProductSlider imageData={imageData} />
              <div className='description'>
                <h3>■商品説明</h3>
                <div>
                  <p className='text'>{detail.description}</p>
                  <p className='price_wrapper'>
                    <span>価格:</span>
                    <span className='price'>{detail.price}</span>
                    <span>円（税込）</span>
                  </p>
                </div>
                <h4>■店内在庫</h4>
                <p className='count'>{`残り ${detail.countInStock} 品`}</p>
              </div>
              <div className='button_wrapper'>
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
              </div>
            </div>
          </>
        ) : <p>...Loading</p>
      }
    </div>
  )
}

export default ProductDetail
