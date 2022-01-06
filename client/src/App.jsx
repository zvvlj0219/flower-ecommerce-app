import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { listenAuth, initAuth } from './redux/actions/usersActions'

// view
import Header from './view/Header/Header'
import FirstView from './view/Product/FirstView'
import ProductDetail from './view/Product/ProductDetail'
import WishList from './view/WishList/WishList'
import Cart from './view/Cart/Cart'
import Auth from './Auth'
import SignIn from './view/Auth/SignIn'
import Register from './view/Auth/Register'

const App = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()
  const { isSignedIn } = useSelector(state => state.users)

  useEffect(() => {
    if (!isSignedIn && localStorage.getItem('profile')) {
      dispatch(listenAuth(history, pathname))
    } else {
      dispatch(initAuth(history))
    }
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={FirstView} />
        <Route exact path='/product-detail/:name/:id' component={ProductDetail} />
        <Route exact path='/auth/signin' component={SignIn} />
        <Route exact path='/auth/register' component={Register} />
        <Route exact path='/wishlist' component={WishList} />
        <Route exact path='/cart' component={Cart} />

        <Auth>
          <Route exact path='/' component={FirstView} />
          <Route exact path='/product-detail/:name/:id' component={ProductDetail} />
        </Auth>
      </Switch>
      <div>フッター</div>
      <hr />
      <div>
        <p>product add form</p>
        <p>name</p>
        <p>description</p>
        <p>price</p>
        <p>count in stock</p>
        <p>image url</p>
      </div>
    </div>
  )
}

export default App
