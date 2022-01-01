import { Link } from 'react-router-dom'

const Header = () => {
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
        <p>usernmae</p>
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
