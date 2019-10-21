<template>
  <div class="wrap">
    <div class="temp">（暂停，施工）</div>
    <div class="article-list">
      <div class="article-item" v-for="(item, index) in list" :key="index">
        <div class="title">
          <!--<div @click="readDetail(item.fakeId)">{{item.title}}</div>-->
          <a class="turn-origin" :href="item.html_url" target="_blank">{{item.title}}</a>
        </div>
      </div>
    </div>
    <div class="message-view" v-if="message">
      <div class="message">{{message}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { markedIssues } from '../../utils/utils'

export default {
  name: 'Blog',
  data () {
    return {
      list: [],
      message: ''
    }
  },
  created () {
    this.getIssues()
  },
  methods: {
    getIssues () {
      axios({
        method: 'get',
        url: 'https://api.github.com/repos/coldqiu/Niannian/issues',
        header: {
          Accept: 'application/vnd.github.v3+json'
        }
      })
        .then((data) => {
          console.log('data', data)
          if (data.status === 200) {
            this.list = markedIssues(data.data)
          } else if (data.status === 403) {
          }
        })
        .catch((err) => {
          console.log('err', err)
          this.message = '访问过于频繁，请稍后重试'
        })
    }
    // readDetail (id) {
    //   this.$router.push({
    //     path: `/blog/${id}`
    //   })
    // }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .article-list
    padding-top: 20px
    padding-bottom: 50px
    padding-left: 20px
    padding-right: 20px
    max-width: 860px
    margin: 0 auto
    text-align: left
    .article-item
      margin: 20px 0
      padding-bottom: 15px
      border-bottom: 1px dashed #eee
      .title
        font-size: 18px
        font-weight: 600
        color: #63666b
        a
          font-size: 18px
          font-weight: 600
          color: #63666b
      .article-box
        font-size: 15.8px;
        line-height: 1.82;
        color: #63666b
        img
          max-width: 660px
      .origin-link
        a
          font-size: 14px
          color: #8686ef
  .message-view
    margin: 25px 0
    .message
      color: red
  @media screen and (max-width: 414px)
    .article-list
      padding: 0 12px
      .article-box
        img
          width: 100%
</style>
