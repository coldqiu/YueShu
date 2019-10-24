<template>
  <transition name="msgbox-fade">
    <div class="message-box__wrapper" v-if="visible">
      <div class="message-box">
        <div class="message-inner">
          <div class="message-box__header" v-if="title">
            <div class="message-box_title">
              <div
                :class="['message-box__status', icon]"
                v-if="icon">
              </div>
              <span>{{title}}</span>
            </div>
            <button class="close" @click="handleClose('close')">close</button>
          </div>
          <div class="message-box__content">
            <div class="message-box__message" v-if="message !== ''">
              <p>{{message}}</p>
            </div>
          </div>
          <div class="message-box__btns">
            <button @click="handleClose('close')" class="button-default">{{cancelButtonText}}</button>
            <button @click="handleClose('confirm')" class="button-primary">{{confirmButtonText}}</button>
          </div>
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
  data () {
    return {
      visible: false,
      title: 'title',
      message: 'massage',
      type: null,
      iconClass: '',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      // MessageBox 的组织结构非常有趣
      callback: null,
      action: null
    }
  },
  props: {
  },
  computed: {
    icon () {
      const { type, iconClass } = this
      return iconClass || (type && typeMap[type] ? `icon-${typeMap[type]}` : '')
    }
  },
  methods: {
    handleClose (action) {
      this.visible = false
      this.$emit('close')
      setTimeout(() => {
        this.restoreBodyStyle()
      }, 200)
      setTimeout(() => {
        console.log('action', action)
        this.callback(action)
      })
    },
    restoreBodyStyle () {
      document.body.style = {}
    }
  }
}
</script>

<style scoped lang="stylus">
  .message-box__wrapper
    .message-box
      position: fixed
      top: 0
      right: 0
      bottom: 0
      left: 0
      z-index: 101
      background-color: rgba(0,0,0,.3)
      /*display: none*/
      text-align: center
      white-space: nowrap
      transition: opacity .12s ease-in
      opacity: 1
      .message-inner
        display: inline-block
        vertical-align: middle
        width: 400px
        text-align: left
        background: #fff
        border-radius: 4px
        border: 1px solid #EBEEF5
        font-size: 18px
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
        .message-box__header
          position: relative
          padding: 15px
          padding-bottom: 10px
          .message-box-title
            font-size: 18px
            line-height: 1
            color: #303133
          .close
            position: absolute
            right: 15px
            top: 15px
            border: none
            font-size: 16px
            /*background: transparent*/
            cursor: pointer
        .message-box__content
          position: relative
          padding: 15px
          padding-bottom: 10px
          font-size: 15px
          p
            margin: 0
            line-height: 24px
        .message-box__btns
          padding: 15px 5px 10px
          text-align: right
    .message-box::after
      content: ''
      display: inline-block
      height: 100%
      vertical-align: middle
      width: 0
      /*width: 10px*/
      /*background: red*/

    /**/
</style>
