import { useSelector, useDispatch } from 'react-redux'
import { removeIsLiked } from '../../redux/actions/detailActions'

const WishList = () => {
  const dispatch = useDispatch()

  const { wishlist } = useSelector(state => state.users)

  const removeFromWishlist = id => {
    dispatch(removeIsLiked(id))
  }

  return (
    <div className='wishlist'>
      <p>WishList</p>
      {
        wishlist.length > 0 ?
          wishlist.map(id => (
            <div key={id}>
              <p>{id}</p>
              <button type='button' onClick={() => removeFromWishlist(id)}>削除</button>
            </div>
          )) : 'no wishlist'
      }
    </div>
  )
}

export default WishList
