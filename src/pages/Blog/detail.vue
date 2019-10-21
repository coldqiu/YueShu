<template>
  <div class="wrap">
    <div class="temp">（暂停，施工，有问题）</div>
    <article>
      <div class="title">{{article.title}}</div>
      <div class="content" v-html="article.body"></div>
      <div class="origin-link">
        <a :href="article.html_url" target="_blank">原文></a>
      </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
import { markedIssuesDetail } from '../../utils/utils'

export default {
  props: {
  },
  data () {
    return {
      id: 1,
      article: {}
    }
  },
  activated () {
    this.getRouterParams()
  },
  created () {
    this.getIssuesDetail(this.id)
  },
  methods: {
    getRouterParams () {
      this.id = this.$route.params.id
    },
    getIssuesDetail (id) {
      axios({
        method: 'get',
        url: `https://api.github.com/repos/coldqiu/Niannian/issues/${id}`,
        header: {
          Accept: 'application/vnd.github.v3+json'
        }
      })
        .then((data) => {
          this.article = markedIssuesDetail(data.data)
        })
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log('val', val, oldVal)
        if (val.params.id) {
          this.getIssuesDetail(val.params.id)
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @media screen and (max-width: 414px)
    .wrap
      width: 100%
      article
        padding: 25px 5px!important
      article >>> .content img
        width: 100%
  .wrap
    article
      max-width: 800px
      margin: 0 auto
      padding: 45px 15px
      .title
        font-size: 24px
        margin: 15px 0
      .content
        text-align: left
      .content >>> p
        line-height: 1.62
        padding: 1px 8px
        font-size: 14.8px
        color: #63666b
      .content >>> blockquote
        margin: 5px
        background: #f3f8fd
        border-left: 5px solid #f3adba
        p
          line-height: 1.7
          padding: 10px 8px
          margin: 0
      .origin-link
        text-align: left
        padding-left: 8px
        a
          font-size: 14px
          color: blue
  @media screen and (max-width: 414px)
    /**/
</style>
