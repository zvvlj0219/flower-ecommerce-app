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

const App = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()
  const { isSignedIn } = useSelector(state => state.users)

  console.log(useSelector(state => state.users))

  useEffect(() => {
    if (localStorage.getItem('profile')) {
      console.log('listen Aurh')
      dispatch(listenAuth(history, pathname))
    } else {
      console.log('init Auth')
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
            </>
          ) : (
            <>
              <Route exact path='/' component={FirstView} />
              <Route exact path='/product-detail/:name/:id' component={ProductDetail} />
              <Route exact path='/wishlist' component={WishList} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/auth/signin' component={SignIn} />
              <Route exact path='/auth/register' component={Register} />
            </>
          )
        }
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
