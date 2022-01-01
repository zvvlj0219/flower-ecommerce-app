import * as actionsType from '../constants/actionsType'

// initial state
import initialState from '../../store/initialState'

export const wishlistReducer = (state = initialState.wishlist, action) => {
  switch (action.type) {
    case actionsType.ADD_TO_WISHLIST: {
      const { list } = state
      const mergedData = list.filter(id => {
        if (id !== null) {
          return id
        }
        return false
      })
      mergedData.push(action.payload)
      localStorage.setItem('wishlist', JSON.stringify(mergedData))
      return {
        list: mergedData
      }
    }
    case actionsType.REMOVE_FROM_WISHLIST: {
      const { list } = state
      const refreshedData = list.filter(id => id !== action.payload)
      localStorage.setItem('wishlist', JSON.stringify(refreshedData))
      return {
        list: refreshedData
      }
    }
    default:
      return state
  }
}
