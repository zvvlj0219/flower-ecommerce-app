import { Switch, Route } from 'react-router-dom'

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
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/auth/signin' component={SignIn} />
        <Route exact path='/auth/register' component={Register} />
        <Route exact path='/' component={FirstView} />
        <Route exact path='/product-detail/:name/:id' component={ProductDetail} />
        <Route exact path='/wishlist' component={WishList} />
        <Route exact path='/cart' component={Cart} />

        <Auth>
          <div>auth</div>
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
