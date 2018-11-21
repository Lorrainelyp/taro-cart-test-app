import Taro, { Component } from '@tarojs/taro'
import { View, Button,Text,Image } from '@tarojs/components'
import './index.scss'

export default class CommodityDetail extends Component {

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

  componentDidMount () {
  }

  componentWillReceiveProps (nextProps) {

  }

  componentWillUnmount () {
    Taro.removeStorage({key:'goodDetail'})
  }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    const { goodDetail } = this.state
    return (
      <View className='commodity'>
        <Text>{goodDetail.name}</Text>
        <Image src={goodDetail.picUrl}/>
        <Text>{`商品Id:${goodDetail.id}`}</Text>
        <Text>{`库存：${goodDetail.stockCount}`}</Text>
        <Button onClick={this.props.addToCart.bind(this)} disabled={!goodDetail.stockCount}>{goodDetail.stockCount>0?'加入购物车':'售罄'}</Button>
      </View>
    )
  }
}

