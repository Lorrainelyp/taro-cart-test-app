import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import CommodityDetail from '../../components/commodityDetail'
import {addToCart} from '../../actions/goods'

import './index.scss'

function mapStateToProps(state) {
  return {
    goods:state.goods
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart(goodId){
      dispatch(addToCart(goodId))
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

  render () {
    return (
      <View className='commodityDetailContainer'>
        <CommodityDetail
          goodDetail={this.state.goodDetail}
          onHandleAddCart={this.props.addToCart.bind(this,this.state.goodDetail.id)}
        />
      </View>
    )
  }
}

export default CommodityDetailContainer
