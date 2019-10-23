import Vue from 'vue'
import msgboxVue from './main.vue'
import merge from '@/utils/merge'

const MessageBoxConstructor = Vue.extend(msgboxVue)
// 不想添加实例管理类popup，暂时简单一点，将来也可能不会引入，没必要吧
// 尝试简化elment-ui中的MessageBox
// 可能是太困了

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
    document.body.removeChild(this.$el)
    this.$destroy()
  }, 300)
  this.visible = false
}
let instanceList = [] // eslint-disable-line

const MessageBox = (options = {}) => {
  options = merge({}, defaults, options)
  let parent = document.body
  let instance = new MessageBoxConstructor({
    el: document.createElement('div'),
    data: options
  })
  instance.callback = defaultCallback
  parent.style['overflow'] = 'hidden'
  parent.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
  return instance
}

export default MessageBox
