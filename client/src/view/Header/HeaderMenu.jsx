import { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/usersActions'

const HeaderMenu = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { isSignedIn } = useSelector(state => state.users)

  const callLogout = useCallback(() => {
    dispatch(logout(history))
  }, [dispatch])

  return (
    <div>
      {
        isSignedIn ? (
          <div>
            <button
              type='button'
              className='logout'
              onClick={callLogout}
            >
              ログアウト
            </button>
          </div>
        ) : (
          <div>
            <Link to='/auth/signin'>ログイン</Link>
          </div>
        )
      }
    </div>
  )
}

export default HeaderMenu
