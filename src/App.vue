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
  .wrap {
    text-align: center
  }
  .temp {
    margin-top: 30px
  }
</style>
