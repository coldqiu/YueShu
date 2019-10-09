<template>
  <div class="suspension-panel" v-show="visible">
    <span>BackTop</span>
  </div>
</template>

<script>
const OFFSET_TOP = 100
export default {
  name: 'backTop',
  data () {
    return {
      visible: false
    }
  },
  mounted: function () {
    // 生命周期activated需要在keep-alive中使用
    window.addEventListener('scroll', this.checkOsTop)
  },
  methods: {
    checkOsTop () {
      let osTop = document.documentElement.scrollTop
      let clientHeight = document.documentElement.clientHeight
      console.log('osTop, clientHeight', osTop, clientHeight)
      if (osTop > OFFSET_TOP) {
        this.visible = true
      } else {
        this.visible = false
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .suspension-panel
    position: fixed
    bottom: 80px
    right: 60px
    padding: 20px
    background: royalblue
    color: rebeccapurple
    font-size: 22px
    font-weight: 700
  //
</style>
