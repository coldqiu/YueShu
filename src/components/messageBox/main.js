import Vue from 'vue'
import msgboxVue from './main.vue'
import merge from '@/utils/merge'

const MessageBoxConstructor = Vue.extend(msgboxVue)
// 不想添加实例管理类popup，暂时简单一点，将来也可能不会引入，没必要吧
// 尝试简化elment-ui中的MessageBox,一个单例版
// 暂停，被下面的概念弄迷糊了
// ES6的import/export导出的变量是单例！？单例模式，
// 在单页应用的单页面中都属于单例的应用（但不属于单例应用）

const defaults = {
  type: 'info',
  title: 'this.is.title',
  message: 'this.is.message'
}

const defaultCallback = action => {
  console.log('defaultCallback:取消or确定', action)
}

MessageBoxConstructor.prototype.close = function () {
  setTimeout(() => {
    this.$destroy()
  }, 300)
  this.visible = false
}

let instance
const MessageBox = (options = {}) => {
  //  options 是调用时传递参数对象
  options = merge({}, defaults, options)
  if (instance) return instance
  let parent = document.body
  let _instance = new MessageBoxConstructor({
    el: document.createElement('div'),
    data: options
  })
  _instance.callback = defaultCallback
  parent.appendChild(_instance.$el)
  Vue.nextTick(() => {
    _instance.visible = true
  })
  instance = _instance
  return _instance
}

export default MessageBox
