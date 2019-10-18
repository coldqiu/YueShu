<template>
  <transition name="msgbox-fade">
    <div
      class="message-box__wrapper">

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
    title: 'title',
    message: 'massage',
    type: null,
    iconClass: '',
    customClass: '', // MessageBox 自定义的类名
    beforeClose: null,
    showFooterButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    closeOnPressEscape: true,
    closeOnHashChange: true, // hashchange是关闭MessageBox
    center: false
    // MessageBox 的组织结构非常有趣
  }
}
</script>

<style scoped>

</style>
