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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
