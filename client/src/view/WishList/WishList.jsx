import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const WishList = () => {
  const { list } = useSelector(state => state.wishlist)

  const [wishlist, setWishlist] = useState(list)

  useEffect(() => console.log(wishlist), [list, setWishlist])

  return (
    <div>
      <p>WishList</p>
      {/* <div>
        {
          wishlist ?
            wishlist.map(item => (
              <div key={item._id}>
                <p>{item.name}</p>
                <button
                  type='button'
                >
                  {item.isLiked}
                </button>
              </div>
            )) : (
              <p>no wishlist</p>
            )
        }
      </div> */}
    </div>
  )
}

export default WishList
