import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
// import List from '@mui/material/List'
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
      >
        <div
          className={classes.drawerBox}
        >
          <div>
            {
              isSignedIn ? (
                <p>{`こんにちは, ${username} さん`}</p>
              ) : (
                <Link
                  to='/auth/signin'
                >
                  ログイン
                </Link>
              )
            }
          </div>
          <Divider />
          <div>
            {
              isSignedIn ? (
                <button
                  type='button'
                  onClick={callLogout}
                >
                  ログアウト
                </button>
              ) : ''
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
