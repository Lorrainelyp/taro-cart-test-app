import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import CommodityContainer from './pages/commodityContainer'

import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/commodityContainer/index',
      'pages/cartContainer/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#7A7E83',
      selectedColor: '#3cc51f',
      borderStyle: 'black',
      backgroundColor: '#ffffff',
      list: [
        {
          pagePath: 'pages/commodityContainer/index',
          iconPath: 'static/image/commodity_off.png',
          selectedIconPath: 'static/image/commodity_on.png',
          text: '商品'
        },
        {
          pagePath: 'pages/cartContainer/index',
          iconPath: 'static/image/my_off.png',
          selectedIconPath: 'static/image/my_on.png',
          text: '购物车'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <CommodityContainer />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
