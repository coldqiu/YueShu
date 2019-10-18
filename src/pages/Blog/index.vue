<template>
  <div class="wrap">
    <h1>Blog</h1>
    <span>可能会有，更可能没有（暂停，施工）</span>
      <div class="article-list">
        <div class="article-item" v-for="(item, index) in list" :key="index">
          <article class="article-box" v-html="item.content ? item.content : 'NO Data'"></article>
          <!--<div class="id">{{item.id}}</div>-->
          <button @click="handleDelete(item.id)" class="delete-article">delete-article</button>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
// import { markedData } from '../../utils/utils'

export default {
  name: 'Blog',
  data () {
    return {
      list: []
    }
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
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
