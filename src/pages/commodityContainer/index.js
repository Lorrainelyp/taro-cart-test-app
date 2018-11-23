import Taro, { Component } from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Commodity from '../../components/commodity'
import {  AtCurtain,AtButton } from 'taro-ui'
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
  constructor(){
      super(...arguments)
    this.state={
      selector: ['美国', '中国', '巴西', '日本'],
      selectorChecked: '美国',
      timeSel: '12:01',
      dateSel: '2018-04-22',
      isOpened: false
    }
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  onCurtainShow(){
    this.setState({
      isOpened: true
    })
  }
  onCurtainHide(){
      this.setState({
        isOpened:false
      })
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
        <View className='page-body'>
          <View className='page-section'>
            <Text>地区选择器</Text>
            <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View className='picker'>
                  当前选择：{this.state.selectorChecked}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>时间选择器</Text>
            <View>
              <Picker mode='time' onChange={this.onTimeChange}>
                <View className='picker'>
                  当前选择：{this.state.timeSel}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>日期选择器</Text>
            <View>
              <Picker mode='date' onChange={this.onDateChange}>
                <View className='picker'>
                  当前选择：{this.state.dateSel}
                </View>
              </Picker>
            </View>
          </View>
          <AtCurtain
            isOpened={this.state.isOpened}
            onClose={this.onCurtainHide.bind(this)}
          >

          </AtCurtain>
          <AtButton
            onClick={this.onCurtainShow.bind(this)}>
            右上关闭幕帘
          </AtButton>
        </View>

      </View>
    )
  }
}

export default CommodityContainer
