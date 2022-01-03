import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWishlist } from '../../redux/actions/wishlistActions'
import { updateIsLiked } from '../../redux/actions/detailActions'

const WishList = () => {
  const dispatch = useDispatch()
  const { list } = useSelector(state => state.wishlist)

  console.log(list)

  const toggleIsLiked = (id, isLiked) => {
    dispatch(updateIsLiked(id, !isLiked))
  }

  useEffect(() => {
    dispatch(fetchWishlist())
  }, [])

  return (
    <div className='wishlist'>
      <p>WishList</p>
      <div>
        {
          list ?
            list.map(item => (
              <div
                className='wishlist_item'
                key={item._id}
              >
                <div>{item.name}</div>
                <button
                  type='button'
                  onClick={toggleIsLiked(item._id, item.isLiked)}
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
