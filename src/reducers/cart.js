import * as goodType from '../constants/goods'
import * as cartType from '../constants/cart'

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
    case goodType.ADD_TO_CART:
      return {
        ...state,
        cartGoods:addGoods(state,action.good)
      }
    case cartType.ADD_CART_NUM:
      return {
        ...state,
        cartGoods:addCartGoodNum(state,action.cartGood)
      }
    case cartType.MINUS_CART_NUM:
      return {
        ...state,
        cartGoods:minusCartGoodNum(state,action.cartGood)
      }
    default:
      return state
  }
}
