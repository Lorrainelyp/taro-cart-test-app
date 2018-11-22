import {
  FETCH_GOODSDATA,
  ADD_TO_CART
} from '../constants/goods'

export const fetchGoodsList = () => {
  let goods = {
  104817:{
    "id": 104817,
    "createTime": "2016-11-09 10:09:34",
    "updateTime": "2018-03-12 00:55:56",
    "state": 0,
    "name": "薰衣草 干花 装饰",
    "price": 20,
    "costPrice": 2,
    "picUrl": "https://img.alicdn.com/bao/uploaded/i1/27606490/TB2AawRXRLxQeBjy0FnXXcQwpXa_!!27606490.jpg",
    "url": "http://item.taobao.com/item.htm?id=537271545121",
    "cId": 124488006,
    "itemId": 537271545121,
    "salesCount": 2,
    "weight": 0,
    "consumptionCycle": null,
    "stockCount": 786,
    "propertyRemark": "",
    "category": 200
  },
    104825:{
    "id": 104825,
    "createTime": "2016-11-09 10:09:34",
    "updateTime": "2018-03-02 08:48:44",
    "state": 0,
    "name": "1112",
    "price": 20,
    "costPrice": 80.23,
    "picUrl": "https://img.alicdn.com/bao/uploaded/i3/27606490/TB2FecOXGnyQeBjSspeXXa8WpXa_!!27606490.jpg",
    "url": "http://item.taobao.com/item.htm?id=537229506775",
    "cId": 124488006,
    "itemId": 537229506775,
    "salesCount": 688,
    "weight": 3322,
    "consumptionCycle": 23,
    "stockCount": 11,
    "propertyRemark": "15wgeg消耗周期消耗周期消耗周期",
    "category": 200
  },
    104820:{
    "id": 104820,
    "createTime": "2016-11-09 10:09:34",
    "updateTime": "2018-01-30 03:20:25",
    "state": 0,
    "name": "莲花瓣 干花 装饰",
    "price": 20,
    "costPrice": 6,
    "picUrl": "https://img.alicdn.com/bao/uploaded/i2/27606490/TB2wHkMXPzyQeBjy0FeXXbwyFXa_!!27606490.jpg",
    "url": "http://item.taobao.com/item.htm?id=537271333058",
    "cId": 124488006,
    "itemId": 537271333058,
    "salesCount": 5,
    "weight": 0,
    "consumptionCycle": 4,
    "stockCount": 2,
    "propertyRemark": "",
    "category": 200
  },
    104814:{
    "id": 104814,
    "createTime": "2016-11-09 10:09:34",
    "updateTime": "2018-01-30 03:20:22",
    "state": 0,
    "name": "白雏菊 鲜花 插花 装饰",
    "price": 20,
    "costPrice": 3.5,
    "picUrl": "https://img.alicdn.com/bao/uploaded/i3/27606490/TB2R.8bXAWM.eBjSZFhXXbdWpXa_!!27606490.jpg",
    "url": "http://item.taobao.com/item.htm?id=540017018737",
    "cId": 124488006,
    "itemId": 540017018737,
    "salesCount": 4,
    "weight": 0,
    "consumptionCycle": null,
    "stockCount": 21,
    "propertyRemark": "",
    "category": 202
  },
    104815:{
    "id": 104815,
    "createTime": "2016-11-09 10:09:34",
    "updateTime": "2018-01-30 03:20:18",
    "state": 0,
    "name": "捧花 鲜花 写真",
    "price": 20,
    "costPrice": 5,
    "picUrl": "https://img.alicdn.com/bao/uploaded/i1/27606490/TB2Z5hXXA1M.eBjSZFOXXc0rFXa_!!27606490.jpg",
    "url": "http://item.taobao.com/item.htm?id=540016433772",
    "cId": 124488006,
    "itemId": 540016433772,
    "salesCount": 88,
    "weight": 0,
    "consumptionCycle": null,
    "stockCount": 57,
    "propertyRemark": "",
    "category": 200
  }
  }
  return {
    type: FETCH_GOODSDATA,
    goods
  }
}

export const addToCart = (good) => {
  return {
    type: ADD_TO_CART,
    good
  }
}



