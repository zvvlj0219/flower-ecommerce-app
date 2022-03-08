import { createStore, combineReducers, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

// Import reducers
import { productReducer } from '../redux/reducers/productReducer'
import { usersReducer } from '../redux/reducers/usersReducer'

export const history = createBrowserHistory()

// store
export default function configureStore() {
  const store = createStore(
    combineReducers({
      router: connectRouter(history),
      products: productReducer,
      users: usersReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
  return store
}
