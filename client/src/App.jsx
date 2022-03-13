import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { listenAuth, initAuth } from './redux/actions/usersActions'

// view
import Header from './view/Header/Header'
import FirstView from './view/FirstView'
import AllProducts from './view/Product/AllProducts'
import ProductDetail from './view/Product/ProductDetail'
import WishList from './view/WishList/WishList'
import Cart from './view/Cart/Cart'
import UploadProduct from './view/Product/UploadProduct'
import SignIn from './view/Auth/SignIn'
import Register from './view/Auth/Register'
import Order from './view/Order/Order'
import GuestOrderInfo from './view/Order/GuestOrderInfo'
import OrderComplete from './view/Order/OrderComplete'
import AccountService from './view/Account/AccountService'
import EditAccount from './view/Account/EditAccount'
import OrderHistory from './view/Account/OrderHistory'

const App = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()

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
        <Route exact path='/' component={FirstView} />
        <Route exact path='/all-products' component={AllProducts} />
        <Route exact path='/product-detail/:name/:id' component={ProductDetail} />
        <Route exact path='/wishlist' component={WishList} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/upload-product' component={UploadProduct} />
        <Route exact path='/cart/guestorderinfo' component={GuestOrderInfo} />
        <Route exact path='/order' component={Order} />
        <Route exact path='/order/complete' component={OrderComplete} />
        <Route exact path='/auth/signin' component={SignIn} />
        <Route exact path='/auth/register' component={Register} />
        <Route exact path='/account-service' component={AccountService} />
        <Route exact path='/account-service/edit-account' component={EditAccount} />
        <Route exact path='/account-service/order-history' component={OrderHistory} />
      </Switch>
      <hr />
      <div>フッター</div>
    </div>
  )
}

export default App
