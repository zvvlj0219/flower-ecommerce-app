import { createStore, combineReducers, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

// Import reducers
import { fetchProductReducer } from '../redux/reducers/productReducer'
import { fetchDetailReducer } from '../redux/reducers/detailReducer'

export const history = createBrowserHistory()

// store
export default function configureStore() {
  const store = createStore(
    combineReducers({
      router: connectRouter(history),
      products: fetchProductReducer,
      productDetail: fetchDetailReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
  return store
}
