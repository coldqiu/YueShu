<template>
  <div class="wrap">
    <h1>test demo</h1>
    <div class="container">
      <!--<div class="markdown-box">-->
        <!--<vue-simplemde v-model="content" ref="markdownEditor" :highlight="true"></vue-simplemde>-->
      <!--</div>-->
      <!--<div class="button">-->
        <!--<button @click="handleClick">submit</button>-->
      <!--</div>-->
      <div class="textarea-box">
        <textarea name="" id="" v-model="content" placeholder="支持markdown语法"></textarea>
        <br>
        <div class="textarea-button">
          <button @click="handleClick" class="subimt-textarea button-textarea">submit-textarea</button>
        </div>
      </div>
      <div class="article-list">
        <div class="article-item" v-for="(item, index) in list" :key="index">
          <article class="article-box" v-html="item.content ? item.content : 'NO Data'"></article>
          <!--<div class="id">{{item.id}}</div>-->
          <button @click="handleDelete(item.id)" class="delete-article">delete-article</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
import hljs from 'highlight.js'
import axios from 'axios'
import marked from 'marked'
// highlight: function (code, lang, callback) {
//   require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
//     callback(err, result.toString())
//   })
// }

window.hljs = hljs

export default {
  name: 'Search',
  data () {
    return {
      content: '',
      list: [],
      markedList: []
    }
  },
  components: {
    VueSimplemde
  },
  created () {
    this.getArticleList()
    this.markdown()
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
          this.list = this._markedData(data.data)
        })
    },
    handleDelete (id) {
      console.log('id', id)
      axios({
        method: 'delete',
        url: `/markdown/${id}`
      })
        .then((data) => {
          console.log('after delete', data)
          this.getArticleList()
        })
    },
    markdown () {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        smartLists: true,
        sanitize: true,
        smartypants: false,
        highlight: function (code) {
          return hljs.highlightAuto(code).value
        }
      })
    },
    _markedData (data) {
      let list = []
      data.forEach((currentValue) => {
        let item = marked(currentValue.content ? currentValue.content : 'NO data')
        list.push({id: currentValue._id, content: item})
      })
      return list
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
    /***/
      /*text-align: left*/
  .button
    margin-top: 60px
    text-align: center
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
    padding-left: 20px
    padding-right: 20px
    max-width: 660px
    margin: 0 auto
    text-align: left
    .article-box
      img
        max-width: 660px

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
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover
      background: #66b1ff
      border-color: #66b1ff
      color: #fff
    &:active
      background: #3a8ee6
      border-color: #3a8ee6
      color: #fff
  @media screen and (max-width: 414px)
    .article-box
      img
        width: 100%
/**/
</style>
