import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import HeaderDrawer from './HeaderDrawer'
import MenuWrapper from './MenuWrapper'
import './header.css'

const Header = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false)

  const handleDrawer = useCallback((event, isOpne) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return
    setsidebarOpen(isOpne)
  }, [setsidebarOpen])

  const navLink = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/' },
    { name: 'Products', path: '/' },
    { name: 'information', path: '/' }
  ]

  return (
    <div className='header flex'>
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
        </ul>
      </nav>
      <div className='menu_wrapper flex'>
        <MenuWrapper
          handleDrawer={e => handleDrawer(e, true)}
        />
        <HeaderDrawer open={sidebarOpen} onClose={handleDrawer} />
      </div>
    </div>
  )
}

export default Header
