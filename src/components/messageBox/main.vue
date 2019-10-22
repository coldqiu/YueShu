<template>
  <transition name="msgbox-fade">
    <div class="message-box__wrapper" v-if="visible" @click.self="handleClose">
      <div class="message-box">
        <div class="message-box__header" v-if="title">
          <div class="message-box_title">
            <div
              :class="['message-box__status', icon]"
              v-if="icon">
            </div>
            <span>{{title}}</span>
          </div>
          <button @click="handleClose"></button>
        </div>
        <div class="message-box__content">
          <div class="message-box__message" v-if="message !== ''">
            <p>{{message}}</p>
          </div>
        </div>
        <div class="message-box__btns">
          <button>{{cancelButtonText}}</button>
          <button>{{confirmButtonText}}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// 真的要把element-ui的组件MessageBox薅过来吗，el-dialog会不会更好，真的有必要吗
// eslint-disable-next-line
let typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}
export default {
  name: 'messageBox',
  props: {
    visible: false,
    title: 'title',
    message: 'massage',
    type: null,
    iconClass: '',
    confirmButtonText: '确定',
    cancelButtonText: '取消'
    // MessageBox 的组织结构非常有趣
  },
  computed: {
    icon () {
      const { type, iconClass } = this
      return iconClass || (type && typeMap[type] ? `icon-${typeMap[type]}` : '')
    }
  },
  methods: {
    handleClose () {
    }
  }
}
</script>

<style scoped>

</style>
