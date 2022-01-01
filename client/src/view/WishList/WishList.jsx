import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWishlist } from '../../redux/actions/wishlistActions'

const WishList = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.wishlist)

  const [wishlist, setWishlist] = useState()

  useEffect(() => {
    dispatch(fetchWishlist())
  }, [])

  useEffect(() => {
    if (data) {
      setWishlist(data)
    }
  }, [data])

  return (
    <div className='wishlist'>
      <p>WishList</p>
      <div>
        {
          wishlist ?
            wishlist.map(item => (
              <div
                className='wishlist_item'
                key={item._id}
              >
                <div>{item.name}</div>
                <button
                  type='button'
                >
                  {item.isLiked ? '❤' : '♡'}
                </button>
              </div>
            )) : (
              <p>no wishlist</p>
            )
        }
      </div>
    </div>
  )
}

export default WishList
