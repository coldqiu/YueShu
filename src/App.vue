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
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
}
  /*h1, span {*/
    /*text-align: center;*/
  /*}*/
  /*h1 {*/
    /*font-size: 18px;*/
    /*margin: 10px 0 15px 0;*/
    /*color: #8c8383;*/
  /*}*/
  span {
    /*font-size: 14px;*/
    /*color: #c37b7b;*/
  }
  .wrap {
    text-align: center;
  }
</style>
