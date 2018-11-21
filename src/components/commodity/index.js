import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
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


  render () {
    const { goods } = this.props
    const goodsList = goods.map(good=>
      <AtListItem
        key={good.id}
        title={good.name}
        note={`库存：${good.stockCount}`}
        arrow='right'
        thumb={good.picUrl}
      />
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

