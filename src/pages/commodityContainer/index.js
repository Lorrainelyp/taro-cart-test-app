import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Commodity from '../../components/commodity'
import { fetchGoodsList } from '../../actions/goods'

import './index.scss'

function mapStateToProps(state) {
  return {
    goods:state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGoodsList(goods){
      dispatch(fetchGoodsList(goods))
    }
  }
}
@connect(mapStateToProps,mapDispatchToProps)
class CommodityContainer extends Component {
    config = {
    navigationBarTitleText: '商品页'
  }

  componentWillMount(){
      this.props.fetchGoodsList()
  }

  componentWillReceiveProps (nextProps) {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
      const { goods } = this.props.goods
    return (
      <View className='commodityContainer'>
        <Commodity
          goods={goods}
        />
      </View>
    )
  }
}

export default CommodityContainer
