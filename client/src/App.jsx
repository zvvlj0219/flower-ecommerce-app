import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { listenAuth, initAuth } from './redux/actions/usersActions'

// view
import Header from './view/Header/Header'
import FirstView from './view/Product/FirstView'
import ProductDetail from './view/Product/ProductDetail'
import WishList from './view/WishList/WishList'
import Cart from './view/Cart/Cart'
import SignIn from './view/Auth/SignIn'
import Register from './view/Auth/Register'
import Order from './view/Order/Order'
import OrderConfirm from './view/Order/OrderConfirm'
import OrderComplete from './view/Order/OrderComplete'

const App = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()
  const { isSignedIn } = useSelector(state => state.users)

  console.log(useSelector(state => state.users))

  useEffect(() => {
    if (localStorage.getItem('profile')) {
      dispatch(listenAuth(history, pathname))
    } else {
      dispatch(initAuth(history, pathname))
    }
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        {
          isSignedIn ? (
            <>
              <Route exact path='/' component={FirstView} />
              <Route exact path='/product-detail/:name/:id' component={ProductDetail} />
              <Route exact path='/wishlist' component={WishList} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/order' component={Order} />
              <Route exact path='/order/checkout' component={OrderConfirm} />
              <Route exact path='/order/checkout/complete' component={OrderComplete} />
            </>
          ) : (
            <>
              <Route exact path='/' component={FirstView} />
              <Route exact path='/product-detail/:name/:id' component={ProductDetail} />
              <Route exact path='/wishlist' component={WishList} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/order' component={Order} />
              <Route exact path='/order/checkout' component={OrderConfirm} />
              <Route exact path='/order/checkout/complete' component={OrderComplete} />
              <Route exact path='/auth/signin' component={SignIn} />
              <Route exact path='/auth/register' component={Register} />
            </>
          )
        }
      </Switch>
      <hr />
      <div>フッター</div>
    </div>
  )
}

export default App
