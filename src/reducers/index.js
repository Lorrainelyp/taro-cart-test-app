import { combineReducers } from 'redux'
import counter from './counter'
import goods from './goods'
import cart from './cart'

export default combineReducers({
  counter,
  goods,
  cart
})
