<template>
  <div class="wrap">
    <h1>Timeline</h1>
    <div class="container">
      <ul class="list">
        <li class="block-item">
          <span>枯燥</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.wrap
  h1
    font-size: 18px
    margin: 10px 0 15px 0
    color: #8c8383
  span
    font-size: 14px
    color: #c37b7b
  .container
    width: 800px
    margin: 0 auto
  .list
      .block-item
        margin-bottom: 15px

/**/
</style>
