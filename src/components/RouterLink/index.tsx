import Taro, { Component } from '@tarojs/taro'
import { Text } from '@tarojs/components'

export default class A extends Component {

  componentWillMount () {
    // console.log(this.$router.params)
  }

  componentDidMount () {
  }

  componentWillReceiveProps () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClickHandler () {
    Taro[this.props.redirect ? 'redirectTo' : 'navigateTo']({
      url: this.props.to
    })
  }

  render () {
    return (
      <Text onClick={this.onClickHandler.bind(this)}>
        {this.props.children}
      </Text>
    )
  }
}
