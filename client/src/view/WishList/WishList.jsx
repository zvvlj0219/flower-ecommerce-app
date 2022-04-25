import { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { Divider } from '@mui/material'
import ImageArea from '../../components/ImageArea'
import LinkHistory from '../../components/LinkHistory'
import { getBreakpoint } from '../../module/getBreakpoint'
import { getWindowSize } from '../../module/getWindowSize'
import { removeIsLiked } from '../../redux/actions/wishlistActions'
import './wishlist.css'

const linkdata = [
  { page: 'ホーム', path: '/' },
  { page: 'いいね!した商品', path: '/wishlist' }
]

const iconStyle = {
  color: '#ff0047'
}

const imageStyle = () => {
  const bp = getBreakpoint()

  switch (bp) {
    case 'xxs':
      return {
        width: '50px',
        height: '50px'
      }
    case 'xs':
      return {
        width: '70px',
        height: '70px'
      }
    case 'small':
    case 'medium':
      return {
        width: '100px',
        height: '100px'
      }
    case 'large':
    case 'xl':
      return {
        width: '150px',
        height: '150px'
      }
    default:
      return {
        width: '120px',
        height: '120px'
      }
  }
}

const WishList = () => {
  const dispatch = useDispatch()
  const { width: windowWidth } = getWindowSize()

  const { wishlist } = useSelector(state => state.users)

  const [imageState, setImageState] = useState(imageStyle())

  const removeFromWishlist = useCallback(item => {
    dispatch(removeIsLiked(item))
  }, [dispatch])

  const imageAreaStyle = imageStyle()

  useEffect(() => {
    setImageState(imageAreaStyle)
  }, [windowWidth])

  return (
    <div className='wishlist'>
      <LinkHistory linkdata={linkdata} />
      <div className='item_container'>
        {
          wishlist.length > 0 &&
            wishlist.map(item => (
              <div key={item._id}>
                <div className='item'>
                  <ImageArea
                    path={item.imageUrl[0]}
                    style={{
                      ...imageState,
                      display: 'block',
                      margin: '10px'
                    }}
                    className='productImage'
                  />
                  <div className='item_info' key={item._id}>
                    <Link
                      to={`/product-detail/${item.name}/${item._id}`}
                    >
                      {item.name}
                    </Link>
                    <p className='price_wrapper'>
                      <span>価格:</span>
                      <span className='price'>{item.price}</span>
                      <span>円（税込）</span>
                    </p>
                  </div>
                  <button
                    type='button'
                    onClick={() => removeFromWishlist(item)}
                  >
                    <FavoriteOutlinedIcon
                      fontSize='large'
                      sx={iconStyle}
                    />
                  </button>
                </div>
                <Divider />
              </div>
            ))
        }
        {
          wishlist.length === 0 && (
            <h3>いいねした商品がありません</h3>
          )
        }
      </div>
    </div>
  )
}

export default WishList
