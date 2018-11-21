import Taro, { Component } from '@tarojs/taro'
import { View, Button,Text,Image } from '@tarojs/components'
import './index.scss'

export default class CommodityDetail extends Component {

  constructor () {
    super(...arguments)
    this.state = {
    }
  }

  componentWillMount () {

  }

  componentDidMount () {
  }

  componentWillReceiveProps (nextProps) {

  }

  componentWillUnmount () {
  }

  componentDidShow () { }

  componentDidHide () { }

  onClick(){
    console.log(1111)
  }


  render () {
    const { goodDetail,onHandleAddCart } = this.props
    return (
      <View className='commodity'>
        <Text>{goodDetail.name}</Text>
        <Image src={goodDetail.picUrl}/>
        <Text>{`商品Id:${goodDetail.id}`}</Text>
        <Text>{`库存：${goodDetail.stockCount}`}</Text>
        <Button onClick={onHandleAddCart} disabled={!goodDetail.stockCount}>{goodDetail.stockCount>0?'加入购物车':'售罄'}</Button>
      </View>
    )
  }
}

