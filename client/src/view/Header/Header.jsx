import { useSelector } from 'react-redux'
import Badge from '@mui/material/Badge'
import Link from '@mui/material/Link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import HeaderMenu from './HeaderMenu'

const iconStyle = {
  root: {
    color: 'black'
  }
}

const Header = () => {
  const { wishlist, cart } = useSelector(state => state.users)

  return (
    <div className='header flex'>
      <div className='title_logo'>
        <Link
          href='/'
          underline='none'
          style={iconStyle.root}
        >
          Florist &nbsp;
          <span>.</span>
        </Link>
      </div>
      <nav className='navbar'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>information</li>
        </ul>
      </nav>
      <div className='menu_wrapper flex'>
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
          />
        </div>
        <HeaderMenu />
      </div>
    </div>
  )
}

export default Header
