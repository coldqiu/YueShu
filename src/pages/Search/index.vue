<template>
  <div class="wrap">
    <h1>Search</h1>
    <div class="container">
      <div class="markdown-box">
        <vue-simplemde v-model="content" ref="markdownEditor" :highlight="true"></vue-simplemde>
      </div>
    </div>
  </div>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
import hljs from 'highlight.js'
window.hljs = hljs

export default {
  name: 'Search',
  data () {
    return {
      content: null
    }
  },
  components: {
    VueSimplemde
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'simplemde/dist/simplemde.min.css';
  @import 'simplemde-theme-base/dist/simplemde-theme-base.min.css';
  .markdown-box
    width: 660px
    height: 350px
    margin: 0 auto
    padding-top: 25px
  /**/
</style>
