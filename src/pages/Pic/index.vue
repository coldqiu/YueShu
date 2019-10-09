<template>
  <div class="wrap">
    <div class="container">
      <div class="list">
        <div class="img-item" v-for="(item, index) in list" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const IMGWIDTH = 200
const len = 6
const OFFSETTOP = 360

export default {
  name: 'Pic',
  data () {
    return {
      list: [],
      newList: [],
      osTop: 0
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init () {
      this.list = this._randomList()
      // console.log('window.document', window.document)
    },
    // 生成本地图片地址列表
    _randomList () {
      let tempList = []
      for (let i = 0; i < 10; i++) {
        let tempNum = Math.round(Math.random() * 10) + ''
        while (tempNum.length < 3) {
          tempNum = '0' + tempNum
        }
        tempList.push('../../static/img/' + tempNum + '.jpg')
      }
      return tempList
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    .container
      margin-top: 10px
      .list
        width: 1200px
        margin: 0 auto
        font-size: 0
        .img-item
          display: block
          text-align: left
          vertical-align: bottom
          margin-bottom: 15px
          background: linear-gradient(45deg, #a09898, transparent);
          img
            max-width: 450px
            max-height: 400px
</style>
