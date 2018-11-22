import * as type from '../constants/cart'
import immutable from 'immutable'

const INITIAL_STATE={
  cartGoods:[]
}

const addGoods=function (state,good){
  const hasGood = state.cartGoods.some((item)=>{
    if(item.id===good.id){
      item.quantity+=1
      return true
    }else {
      return false
    }
  })
  if(!hasGood){
    state.cartGoods.push({
      ...good,
      quantity:1
    })
  }
  return state.cartGoods
}

const addCartGoodNum=function (state,good) {
  state.cartGoods.some((item)=>{
    if(item.id===good.id){
      item.quantity+=1
    }
  })
  return state.cartGoods
}

const minusCartGoodNum=function (state,good) {
  state.cartGoods.some((item)=>{
    if(item.id===good.id){
      item.quantity=item.quantity<1?1:item.quantity-1
    }
  })
  return state.cartGoods
}




export default function cart (state = INITIAL_STATE, action) {
  switch (action.type) {
    case type.ADD_TO_CART:
      return immutable.fromJS({
        ...state,
        cartGoods:addGoods(state,action.good)
      }).toJS()

    case type.ADD_CART_NUM:
      return immutable.fromJS({
        ...state,
        cartGoods:addCartGoodNum(state,action.cartGood)
      }).toJS()
    case type.MINUS_CART_NUM:
      return immutable.fromJS({
        ...state,
        cartGoods:minusCartGoodNum(state,action.cartGood)
      }).toJS()
    default:
      return state
  }
}
