import Taro, { Component } from '@tarojs/taro'
import { View,Button } from '@tarojs/components'
import { AtListItem } from 'taro-ui'
import './index.scss'

export default class Cart extends Component {

  constructor(props, context) {
    super(props, context)
  }

  componentWillMount () {
  }

  componentDidMount () {

  }

  componentWillReceiveProps (nextProps) {

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
    const { cartGoodItem,onAddCartNum,onMinusCartNum } = this.props
    const cartGood = (
      <View>
        <AtListItem
          title={cartGoodItem.name}
          note={`库存：${cartGoodItem.stockCount}`}
          arrow='right'
          thumb={cartGoodItem.picUrl}
          extraText={cartGoodItem.quantity.toString()}
          onClick = { this.handleGoDetail.bind(this,cartGoodItem.id,cartGoodItem)}
        />
        <Button className='add_btn' onClick={onAddCartNum}>+</Button>
        <Button className='dec_btn' onClick={onMinusCartNum}>-</Button>
      </View>
    )
    return (
      <View className='cart-good'>
        {cartGood}
      </View>
    )
  }
}

