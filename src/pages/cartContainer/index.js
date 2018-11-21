import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Commodity from '../../components/commodity'
import { fetchGoodsList } from '../../actions/goods'

import './index.scss'

function mapStateToProps(state) {
  return {
    goods:state.goods
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGoodsList(){
      dispatch(fetchGoodsList())
    }
  }
}
@connect(mapStateToProps,mapDispatchToProps)
class CartContainer extends Component {
  config = {
    navigationBarTitleText: '商品页'
  }

  componentWillMount(){
    this.props.fetchGoodsList()
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { goods } = this.props
    return (
      <View className='commodityContainer'>
        <Commodity
          goods={goods}
        />
      </View>
    )
  }
}

export default CartContainer
