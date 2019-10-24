import Vue from 'vue'
import msgboxVue from './main.vue'
import merge from '@/utils/merge'

const MessageBoxConstructor = Vue.extend(msgboxVue)

// Message-Box好难啊,看看源码，不复杂点，功能就实现不了呀
// https://github.com/ElemeFE/vue-msgbox
// 实际上message-box并不难理解，一步一步看每一步都理解，整体功能也清楚，逻辑都可以走通，
// 但是就这样要自己立刻复刻一个，自己就写不出来了，原因在，脑子：处理器跟不上且内存有限，非得训练了
// 被知识海洋拍打在岸上，苦涩
// 暂停2019.10.24

let instance  // eslint-disable-line
let instanceList = [] // eslint-disable-line

const defaults = {
  type: 'info',
  title: 'this.is.title',
  message: 'this.is.message'
}

const defaultCallback = action => {
  console.log('defaultCallback:取消or确定', action)
}

MessageBoxConstructor.prototype.close = function () {
  // this.$on('close', () => {
  //   // setTimeout(() => {
  //   //   document.body.removeChild(this.$el)
  //   //   this.$destroy()
  //   // }, 300)
  //   console.log('close')
  // })
  console.log('close')
}

const MessageBox = (options = {}) => {
  options = merge({}, defaults, options)
  let parent = document.body
  let instance = new MessageBoxConstructor({
    el: document.createElement('div'),
    data: options
  })
  instance.callback = options.callback ? options.callback : defaultCallback
  parent.style['overflow'] = 'hidden' // element-ui设置滚动条为绝对定位避免了body的偏移
  parent.style['paddingRight'] = '17px' // 滚动条的默认宽度，防止body设置overflow后向右偏移滚动条的位置
  parent.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
  return instance
}

export default MessageBox
