import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Cart from '../../components/cart'

import './index.scss'

function mapStateToProps(state) {
  // console.log(state)
  return {
    cart:state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
@connect(mapStateToProps,mapDispatchToProps)
class CartContainer extends Component {
  config = {
    navigationBarTitleText: '购物车'
  }

  constructor(){
    super(...arguments)

  }

  componentWillMount(){
  }

  componentWillReceiveProps (nextProps) {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleText(){
    console.log(111)
  }


  render () {
    const {cart} = this.props
    const cartGoodList=cart.cartGoods.map(cartGood=>
      <Cart
        key={cartGood.id}
        cartGoodItem={cartGood}
        onAddCartNum={this.props.addCartNum.bind(this,cartGood.id)}
        onMinusCartNum={this.props.minusCartNum.bind(this,cartGood.id)}
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
