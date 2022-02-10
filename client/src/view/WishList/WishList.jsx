import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import Divider from '@mui/material/Divider'
import LinkHistory from '../../components/LinkHistory'
import { removeIsLiked } from '../../redux/actions/detailActions'
import './wishlist.css'

const linkdata = [
  { page: 'ホーム', path: '/' },
  { page: 'いいね!した商品', path: '/wishlist' }
]

const WishList = () => {
  const dispatch = useDispatch()

  const { loading, wishlist } = useSelector(state => state.users)

  const removeFromWishlist = useCallback(item => {
    dispatch(removeIsLiked(item))
  }, [dispatch])

  const iconStyle = {
    color: '#ff0047'
  }

  return (
    <div className='wishlist'>
      <LinkHistory linkdata={linkdata} />
      <div className='item_container'>
        {
          loading && ''
        }
        {
          !loading && wishlist.length > 0 &&
            wishlist.map(item => (
              <div key={item._id}>
                <div className='item'>
                  <img
                    src={item.imagUrl}
                    alt={item.name}
                    className='image'
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
