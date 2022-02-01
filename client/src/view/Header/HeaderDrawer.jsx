import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import { logout } from '../../redux/actions/usersActions'

const useStyles = makeStyles(() => ({
  drawerBox: {
    width: 250
  }
}))

const HeaderDrawer = ({ open, onClose }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const { isSignedIn, username } = useSelector(state => state.users)

  const callLogout = useCallback(() => {
    dispatch(logout(history))
  }, [dispatch])

  const menuList = [
    { linkname: 'ホーム', path: '/' },
    { linkname: 'いいね!した商品', path: '/wishlist' },
    { linkname: 'カート', path: '/cart' }
  ]

  return (
    <nav>
      <Drawer
        anchor='right'
        open={open}
        onClick={e => onClose(e, false)}
        ModalProps={{
          keepMounted: true
          // Better open performance on mobile.
        }}
        className='headerDrawer_container'
      >
        <div className={classes.drawerBox}>
          <div className='hello_message'>
            {
              isSignedIn ? (
                <p>{`こんにちは, ${username} さん`}</p>
              ) : (
                <p>こんにちは、ゲストさん</p>
              )
            }
          </div>
          <Divider />
          {
            menuList.map(el => (
              <>
                <div className='link'>
                  <Link to={el.path}>
                    {el.linkname}
                  </Link>
                </div>
                <Divider />
              </>
            ))
          }
          <div>
            {
              isSignedIn ? (
                <div className='button_wrapper'>
                  <button
                    type='button'
                    onClick={callLogout}
                  >
                    →ログアウト
                  </button>
                </div>
              ) : (
                <div className='button_wrapper'>
                  <Link
                    to='/auth/signin'
                  >
                    ログインする
                  </Link>
                </div>
              )
            }
          </div>
        </div>
      </Drawer>
    </nav>
  )
}

HeaderDrawer.defaultProps = {
  open: false,
  onClose: null
}

HeaderDrawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default HeaderDrawer
