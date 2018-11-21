import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import CommodityDetail from '../../components/commodityDetail'

import './index.scss'

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}
@connect(mapStateToProps,mapDispatchToProps)
class CommodityDetailContainer extends Component {
    config = {
    navigationBarTitleText: '商品详情'
  }

  componentWillMount(){
  }

  componentWillReceiveProps (nextProps) {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='commodityDetailContainer'>
        <CommodityDetail
          addToCart={this.props.addToCart.bind(this)}
        />
      </View>
    )
  }
}

export default CommodityDetailContainer
