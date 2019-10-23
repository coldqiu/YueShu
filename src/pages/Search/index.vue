<template>
  <div class="wrap">
    <div class="temp">（暂停，施工,有问题）</div>
    <div class="container">
      <div class="textarea-box">
        <textarea name="" id="" v-model="content" placeholder="支持markdown语法"></textarea>
        <br>
        <div class="textarea-button">
          <button @click="handleClick" class="button-primary subimt-textarea button-textarea">submit-textarea</button>
        </div>
      </div>
      <div class="article-list">
        <div class="article-item" v-for="(item, index) in list" :key="index">
          <div class="article-box" v-html="item.content ? item.content : 'NO Data'"></div>
          <button @click="handleDelete(item.id)" class="button-primary delete-article">delete-article</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import hljs from 'highlight.js'
import axios from 'axios'
import { markedData, markedData2, markedData3 } from '../../utils/utils' // eslint-disable-line

export default {
  name: 'Search',
  data () {
    return {
      content: '',
      list: []
    }
  },
  components: {
  },
  created () {
    this.getArticleList()
  },
  computed: {
  },
  methods: {
    handleClick () {
      let content = this.content
      axios({
        method: 'post',
        url: '/markdown',
        data: {
          content: content
        }
      })
        .then((data) => {
          this.getArticleList()
          console.log('提交成功', data)
        })
    },
    getArticleList () {
      axios({
        method: 'get',
        url: '/markdown'
      })
        .then((data) => {
          // console.log('data-first', data)
          this.list = markedData(data.data)
          // 第二、三种Array.prototype.map() 会使得 上面的data改变
          // this.list = markedData2(data.data)
          // this.list = markedData3(data.data)
        })
    },
    handleDelete (id) {
      this.$msgbox({
        title: 'title1',
        message: 'message112'
      })
      // axios({
      //   method: 'delete',
      //   url: `/markdown/${id}`
      // })
      //   .then((data) => {
      //     console.log('after delete', data)
      //     this.getArticleList()
      //   })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'simplemde/dist/simplemde.min.css';
  @import 'simplemde-theme-base/dist/simplemde-theme-base.min.css';
  /*需要动态设置css，更好的适配 */
  .markdown-box
    max-width: 660px
    height: 350px
    margin: 0 auto
    padding-top: 25px
    text-align: left
  .textarea-box
    max-width: 660px
    margin: 0 auto
    padding: 20px
    text-align: left
    textarea
      width: 100%
      min-height: 90px
      max-width: 540px
      height: auto
      padding: 5px 15px
      line-height: 1.5
      box-sizing: border-box
      color: #606266
      background-color: #fff
      background-image: none
      border: 1px solid #dcdfe6
      border-radius: 4px
      &:focus
        outline: none
        border-color: #a7a6a6
      &:after
        content: attr(placeholder)
        position: absolute
        top: 8px
        color: red
        font-size: 14px
  .article-list
    padding-top: 20px
    padding-bottom: 50px
    padding-left: 20px
    padding-right: 20px
    max-width: 660px
    margin: 0 auto
    text-align: left
    .article-item
      margin: 20px 0
      padding-bottom: 15px
      border-bottom: 1px dashed #eee
      .article-box
        line-height: 1.62
        padding: 1px 8px
        background: #f3f8fd
        font-size: 15.8px
        color: #63666b
      .article-box >>> p
        img
          max-width: 660px
        code
          font-family: Menlo,Monaco,Consolas,Courier New,monospace
      .article-box >>> pre
        code
          font-family: Menlo,Monaco,Consolas,Courier New,monospace
  button
    display: inline-block
    line-height: 1
    white-space: nowrap
    cursor: pointer
    border: 1px solid
    appearance: none
    text-align: center
    box-sizing: border-box
    outline: none
    margin: 0
    transition: .1s
    font-weight: 500
    user-select: none
    padding: 12px 20px
    font-size: 14px
    border-radius: 4px
  button.button-primary
    color: #fff
    background-color: #409eff
    border-color: #409eff
    &:hover
      background: #66b1ff
      border-color: #66b1ff
      color: #fff
    &:active
      background: #3a8ee6
      border-color: #3a8ee6
      color: #fff
  button.button-default
    background: #FFFFFF
    border: 1px solid #DCDFE6
    color: #606266
    &:hover
      color: #409EFF;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    &:active
      color: #3a8ee6;
      border-color: #3a8ee6;
      outline: none;
  @media screen and (max-width: 414px)
    .article-box
      img
        width: 100%
/**/
</style>
