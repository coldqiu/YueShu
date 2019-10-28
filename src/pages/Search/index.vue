<template>
  <div class="wrap">
    <div class="temp">（暂停，施工,有问题）</div>
    <div class="container">
      <div class="textarea-box">
        <!--<textarea ref="textarea" name="" id="" v-model="content" placeholder="支持markdown语法"></textarea>-->
        <el-input ref="textarea" type="textarea" v-model="content"
                  :autosize="{ minRows: 3, maxRows: 9}"
                  placeholder="支持markdown语法"
                  :maxlength="maxLength"
                  :show-word-limit="showWordLimit"
        ></el-input>
        <div class="textarea-button">
          <button @click="handleSubmit" class="button-primary subimt-textarea button-textarea">submit-textarea</button>
          <button @click="handleClear" class="button-primary">清空</button>
        </div>
      </div>
      <div class="article-list">
        <div class="article-item" v-for="(item, index) in list" :key="index">
          <div class="article-box" v-html="item.content ? item.content : 'NO Data'"></div>
          <div class="article-button">
            <el-button @click="handleDelete(item.id, item.content)" type="danger">删除</el-button>
            <el-button @click="handleUpdate(item.id)" type="primary">修改</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import hljs from 'highlight.js'
import axios from 'axios'
import { markedData, markedData2, markedData3 } from '../../utils/utils' // eslint-disable-line
// import MessageBox from 'vue-msgbox'  //  似乎没有在维护
import { MessageBox, Message } from 'element-ui'
export default {
  name: 'Search',
  data () {
    return {
      content: '',
      list: [],
      maxLength: 300,
      showWordLimit: true
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
    handleSubmit () {
      let content = this.content
      axios({
        method: 'post',
        url: '/markdown',
        data: {
          content: content
        }
      })
        .then((data) => {
          if (data.status === 200) {
            console.log('data', data)
            this.getArticleList()
            Message({
              type: 'info',
              message: '提交成功'
            })
          } else if (data.status === 204) {
            Message({
              type: 'warning',
              message: '不能提交空信息'
            })
          } else {
            console.log('error', data)
          }
        })
    },
    handleClear () {
      this.$refs.textarea.value = ''
    },
    getArticleList () {
      axios({
        method: 'get',
        url: '/markdown'
      })
        .then((data) => {
          this.list = markedData(data.data)
        })
    },
    handleDelete (id, content) {
      MessageBox({
        title: '确定删除?',
        message: `${content}`,
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true,
        showConfirmButton: true,
        dangerouslyUseHTMLString: true
      })
        .then(() => {
          axios({
            method: 'delete',
            url: `markdown/${id}`
          })
            .then((data) => {
              if (data.status === 204) {
                this.getArticleList()
                Message({
                  type: 'info',
                  message: '已删除'
                })
              }
            })
        })
        .catch((action) => {
          Message({
            type: 'info',
            message: '取消删除'
          })
        })
    },
    handleUpdate (id) {
      axios({
        method: 'update',
        url: `markdown/${id}`,
        data: {
          content: 'update content'
        }
      })
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
    .textarea-button
      display: flex
      justify-content: space-between
      margin-top: 8px
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
        overflow-x: auto
        line-height: 1.62
        padding: 1px 8px
        background: #f3f8fd
        font-size: 15.8px
        color: #63666b
        /*参见v-html 渲染的内容设置css失效问题*/
      .article-box >>> p
        img
          max-width: 660px
        code
          font-family: Menlo,Monaco,Consolas,Courier New,monospace
      .article-box >>> pre
        code
          font-family: Menlo,Monaco,Consolas,Courier New,monospace
  @media screen and (max-width: 414px)
    .article-box
      img
        width: 100%
/**/
</style>
