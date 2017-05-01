import { fetch, rap } from 'js/fetch.js'

let url = {
  commit: '/order/commit.do',
  preorder: '/order/preorder.do',
  intentionlists: '/intention/lists.do',
  orderLists: '/order/lists.do',
  delete: '/order/delete.do',
  cancel: '/order/cancel.do',
  sign: '/order/sign.do'
}
url = rap(url)

class order {

  static preorder(data) {
    return fetch(url.preorder, data)
  }

  static commit(data) {
    return fetch(url.commit, data)
  }

  static toOrder(lists,type) {
    let preData = {
      numbers: [],
      months: [],
      ids: []
    }
    lists.forEach( item =>{
      preData.numbers.push(item.number)
      preData.ids.push(item.unifiedMerchandiseId)
      if(type == 3) {
        preData.months.push(item.month)
      }
    })
    Object.keys(preData).forEach( key => {
      preData[key] = preData[key].toString()
    })
    sessionStorage.setItem('preData',JSON.stringify(preData))
    location.href = 'submitOrder.html?type='+type
  }

  static getIntentionLists(data) {
    return fetch(url.intentionlists, data)
  }

  static getOrderLists(data) {
    return fetch(url.orderLists, data)
  }

  static delete(data) {
    return fetch(url.delete, data)
  }

  static cancel(data) {
    return fetch(url.cancel, data)
  }

  static sign(data) {
    return fetch(url.sign, data)
  }

}

export default order
