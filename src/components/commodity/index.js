import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import './index.scss'

export default class Commodity extends Component {

  componentWillMount () {
  }

  componentDidMount () {
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props)
    console.log(nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleGoDetail(id,good){
    Taro.setStorage({
      key:'goodDetail',
      data:good
    })
    Taro.navigateTo({
      url:`/pages/commodityDetailContainer/index?id=${id}`
    })
  }


  render () {
    const { goods } = this.props
    const goodsList = goods.map(good=>
      <View key={good.id}>
        <AtListItem
          title={good.name}
          note={`库存：${good.stockCount}`}
          arrow='right'
          thumb={good.picUrl}
          onClick = { this.handleGoDetail.bind(this,good.id,good)}
        />
      </View>
    )
    return (
      <View className='commodity'>
        <AtList>
          {goodsList}
        </AtList>
      </View>
    )
  }
}

