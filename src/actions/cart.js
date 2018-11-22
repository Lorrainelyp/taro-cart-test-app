import * as type from '../constants/cart'

export const addCartNum = (cartGood) => {
  return {
    type: type.ADD_CART_NUM,
    cartGood
  }
}

export const minusCartNum = (cartGood) => {
  return {
    type: type.MINUS_CART_NUM,
    cartGood
  }
}
