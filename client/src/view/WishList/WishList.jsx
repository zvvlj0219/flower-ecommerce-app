import { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import Divider from '@mui/material/Divider'
import ImageArea from '../../components/ImageArea'
import LinkHistory from '../../components/LinkHistory'
import { getBreakpoint } from '../../module/getBreakpoint'
import { getWindowSize } from '../../module/getWindowSize'
import { removeIsLiked } from '../../redux/actions/detailActions'
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
    case 'xs':
      return {
        width: '100px',
        height: '100px'
      }
    case 'small':
    case 'medium':
      return {
        width: '120px',
        height: '120px'
      }
    case 'large':
    case 'xl':
      return {
        width: '170px',
        height: '170px'
      }
    default:
      return {
        width: '150px',
        height: '150px'
      }
  }
}

const WishList = () => {
  const dispatch = useDispatch()
  const { width: windowWidth } = getWindowSize()

  const { loading, wishlist } = useSelector(state => state.users)

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
          !loading && wishlist.length > 0 &&
            wishlist.map(item => (
              <div key={item._id}>
                <div className='item'>
                  <ImageArea
                    path={item.imageUrl[0]}
                    style={imageState}
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
          !loading && wishlist.length === 0 && (
            <p>いいね!した商品がありません</p>
          )
        }
      </div>
    </div>
  )
}

export default WishList
