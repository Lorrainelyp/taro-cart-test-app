import * as type from '../constants/goods'

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


export default function cart (state = INITIAL_STATE, action) {
  switch (action.type) {
    case type.ADD_TO_CART:
      return {
        ...state,
        cartGoods:addGoods(state,action.good)
      }
    default:
      return state
  }
}
