<template>
  <div class="tab">
    <router-link tag="a" class="tab-item" to="/timeline">
      <span class="tab-link">timeline</span>
    </router-link>
    <router-link tag="a" class="tab-item" to="/blog">
      <span class="tab-link">blog</span>
    </router-link>
    <router-link tag="a" class="tab-item" to="/pic">
      <span class="tab-link">pic</span>
    </router-link>
    <router-link tag="a" class="tab-item" to="/tag">
      <span class="tab-link">tag</span>
    </router-link>
    <router-link tag="a" class="tab-item" to="/search">
      <span class="tab-link">test</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../common/stylus/variable'
  .tab
    display: flex
    justify-content: space-around
    height: 44px
    line-height: 44px
    overflow-x: hidden
    font-size: 0
    width: 100%
    padding: 0 15px
    box-sizing: border-box
    .tab-item
      padding: 0 15px
      cursor: pointer
      padding-bottom: 5px
      color: #71777c
      font-size: 21px
      text-decoration: none
      &.router-link-active
        color: $color-theme
        border-bottom: 2px solid $color-theme
</style>
