import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import CommodityDetail from '../../components/commodityDetail'
import {addToCart} from '../../actions/cart'

import './index.scss'

function mapStateToProps(state) {
  return {
    cart:state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart(good){
      dispatch(addToCart(good))
    }
  }
}
@connect(mapStateToProps,mapDispatchToProps)
class CommodityDetailContainer extends Component {
    config = {
    navigationBarTitleText: '商品详情'
  }
  constructor () {
    super(...arguments)
    this.state = {
      goodDetail:{}
    }
  }

  componentWillMount () {
    Taro.getStorage({
      key:'goodDetail'
    }).then(res=>{
      this.setState({
        goodDetail:res.data
      })
    })
  }

  componentWillReceiveProps (nextProps) {
  }

  componentWillUnmount () {
    Taro.removeStorage({key:'goodDetail'})
  }

  componentDidShow () { }

  componentDidHide () { }

  goToCart(){
    Taro.navigateTo({
      url:`/pages/cartContainer/index`
    })
  }

  render () {
    return (
      <View className='commodityDetailContainer'>
        <CommodityDetail
          goodDetail={this.state.goodDetail}
          onHandleAddCart={this.props.addToCart.bind(this,this.state.goodDetail)}
        />
        <View onClick={this.goToCart.bind(this)}>购物车</View>
      </View>
    )
  }
}

export default CommodityDetailContainer
