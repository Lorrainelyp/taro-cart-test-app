import * as type from '../constants/goods'

const INITIAL_STATE = {}

export default function goods (state = INITIAL_STATE, action) {
  switch (action.type) {
    case type.FETCH_GOODSDATA:
      return Object.assign({},action.goods)
    default:
      return state
  }
}
