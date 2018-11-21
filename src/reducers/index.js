import { combineReducers } from 'redux'
import counter from './counter'
import goods from './goods'

export default combineReducers({
  counter,
  goods
})
