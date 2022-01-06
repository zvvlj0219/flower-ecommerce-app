import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/usersActions'

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { username } = useSelector(state => state.users)

  const callLogout = () => {
    dispatch(logout(history))
  }

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
        {
          username && (
            <button type='button' className='logout' onClick={callLogout}>ログアウト</button>
          )
        }
        <div>
          {
            username ? (
              <p>{username}</p>
            ) : (
              <div>
                <Link to='/auth/signin'>ログイン</Link>
              </div>
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
