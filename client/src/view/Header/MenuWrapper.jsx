import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Badge from '@mui/material/Badge'
import Link from '@mui/material/Link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'

const iconStyle = {
  root: {
    color: 'black'
  }
}

const MenuWrapper = ({ handleDrawer }) => {
  const { wishlist, cart } = useSelector(state => state.users)

  return (
    <>
      <div className='wishlist_link'>
        <Badge
          color='secondary'
          variant='dot'
          invisible={!wishlist.length > 0}
        >
          <Link
            href='/wishlist'
            underline='none'
            style={iconStyle.root}
          >
            <FavoriteBorderIcon />
          </Link>
        </Badge>
      </div>
      <div className='cart_link'>
        <Badge
          color='secondary'
          variant='dot'
          invisible={!cart.length > 0}
        >
          <Link
            href='/cart'
            underline='none'
            style={iconStyle.root}
          >
            <LocalGroceryStoreIcon />
          </Link>
        </Badge>
      </div>
      <div className='header_menu'>
        <FormatAlignRightIcon
          style={iconStyle.root}
          onClick={handleDrawer}
        />
      </div>
    </>
  )
}

MenuWrapper.defaultProps = {
  handleDrawer: null
}

MenuWrapper.propTypes = {
  handleDrawer: PropTypes.func
}

export default MenuWrapper
