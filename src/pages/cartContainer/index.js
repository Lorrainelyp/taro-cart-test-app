import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Cart from '../../components/cart'
import { minusCartNum,addCartNum } from '../../actions/cart'

import './index.scss'
@connect(({ cart }) => ({
  cart
}), (dispatch) => ({
  addCartNum (cartGood) {
    dispatch(addCartNum(cartGood))
  },
  minusCartNum (cartGood) {
    dispatch(minusCartNum(cartGood))
  }
}))
class CartContainer extends Component {
  config = {
    navigationBarTitleText: '购物车'
  }

  componentWillMount(){
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
  }

  componentWillUnmount () { }

  componentDidShow () {
    console.log(111)
  }

  componentDidHide () { }



  render () {
    console.log(this.props)
    let {cart} = this.props
    const cartGoodList=cart.cartGoods.map(cartGood=>
      <Cart
        key={cartGood.id}
        cartGoodItem={cartGood}
        onAddCartNum={this.props.addCartNum.bind(this,cartGood)}
        onMinusCartNum={this.props.minusCartNum.bind(this,cartGood)}
      />
    )
    return (
      <View className='commodityContainer'>
        {cartGoodList}
      </View>
    )
  }
}

export default CartContainer
