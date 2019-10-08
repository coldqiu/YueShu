<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/timeline">
      <span class="tab-link">timeline</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/article">
      <span class="tab-link">article</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/blog">
      <span class="tab-link">blog</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/pic">
      <span class="tab-link">pic</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/tag">
      <span class="tab-link">tag</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">search</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      cursor: pointer
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>
