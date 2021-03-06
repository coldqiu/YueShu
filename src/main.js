// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import MessageBox from '@/components/messageBox'
import '@/common/stylus/style.styl'

import { Input, Button } from 'element-ui'

Vue.use(Input)
Vue.use(Button)
Vue.config.productionTip = false

// Vue.prototype.$msgbox = MessageBox

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
