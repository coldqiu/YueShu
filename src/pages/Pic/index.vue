<template>
  <div class="wrap">
    <div class="temp">（暂停，施工）</div>
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

<style scoped lang="stylus" rel="stylesheet/stylus">
  @media screen and (max-width: 414px)
    .img-item
      /*max-height: 1200px*/
      /*overflow: hidden*/
    img
        width: 100%
        height: 100%
  .wrap
    .container
      margin-top: 10px
      .list
        max-width: 800px
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
            min-width: 320px
  /**/
</style>
