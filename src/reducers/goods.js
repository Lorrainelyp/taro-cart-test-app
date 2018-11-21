import * as type from '../constants/goods'

const INITIAL_STATE = {}
const decreaseInventory=(good)=>{
  return {
    ...good,
    stockCount:good.stockCount-1
  }
}

export default function goods (state = INITIAL_STATE, action) {
  switch (action.type) {
    case type.FETCH_GOODSDATA:
      return Object.assign({},action.goods)
    case type.ADD_TO_CART:
      const { goodId } = action
      return {
        ...state,
        [goodId]:decreaseInventory(state[goodId])
      }
    default:
      return state
  }
}
