import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Article from '@/pages/Article/'
import Tag from '@/pages/Tag'
import Pic from '@/pages/Pic'
import Blog from '@/pages/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tag',
      name: 'Tag',
      component: Tag
    },
    {
      path: '/pic',
      name: 'Pic',
      component: Pic
    },
    {
      path: '/niannian',
      name: 'Niannian',
      component: HelloWorld
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
