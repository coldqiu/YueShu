<template>
  <div id="app">
    <div class="global-component-box">
      <back-top></back-top>
    </div>
    <div class="view-container">
      <tab></tab>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Tab from './components/tab'
import BackTop from './components/backTop'
export default {
  name: 'App',
  components: {
    Tab,
    BackTop
  }
}
</script>

<style>
  ::selection {
    color: #fff;
    background: #88afd6;
  }
  .wrap {
    text-align: center
  }
  .temp {
    margin-top: 30px
  }
  /*参见v-html 渲染的内容设置css失效问题*/
  .article-box p {
    margin: 8px 0;
  }
  .article-box pre {
    margin: 0;
  }
  .article-box p img{
    max-width: 660px
  }
  .article-box p code, pre code {
    font-family: Menlo,Monaco,Consolas,Courier New,monospace
  }
</style>
