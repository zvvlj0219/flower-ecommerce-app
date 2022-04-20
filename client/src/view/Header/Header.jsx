import { useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HeaderDrawer from './HeaderDrawer'
import MenuWrapper from './MenuWrapper'
import './header.css'

const Header = () => {
  const { pathname } = useLocation()
  const [sidebarOpen, setsidebarOpen] = useState(false)

  const handleDrawer = useCallback((event, isOpne) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return
    setsidebarOpen(isOpne)
  }, [setsidebarOpen])

  const navLink = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/all-products' }
  ]

  return (
    <div className='header'>
      <div className='title_logo'>
        <Link to='/'>
          Florist &nbsp;
          <span>.</span>
        </Link>
      </div>
      <nav className='navbar'>
        <ul>
          {
            navLink.map(link => (
              <li key={link.name}>
                <Link to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))
          }
          {
            pathname === '/' ? (
              <li>
                <AnchorLink href='#garally'>
                  information
                </AnchorLink>
              </li>
            ) : (
              <li>
                <Link to='/'>
                  information
                </Link>
              </li>
            )
          }
        </ul>
      </nav>
      <div className='menu_wrapper'>
        <MenuWrapper
          handleDrawer={e => handleDrawer(e, true)}
        />
        <HeaderDrawer open={sidebarOpen} onClose={handleDrawer} />
      </div>
    </div>
  )
}

export default Header
