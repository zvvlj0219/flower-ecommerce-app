import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const users = useSelector(state => state.users)

  const { isSignedIn, username } = users

  return (
    <div className='header flex'>
      <Link
        to='/'
      >
        flower
      </Link>
      <div className='navbar'>navbar</div>
      <div className='account flex'>
        <p>画</p>
        <div>
          {
            isSignedIn ? (
              <p>{username}</p>
            ) : (
              <Link to='/auth/signin'>ログイン</Link>
            )
          }
        </div>
        <Link
          to='/wishlist'
        >
          ♡
        </Link>
        <Link
          to='/cart'
        >
          カート
        </Link>
      </div>
    </div>
  )
}

export default Header
