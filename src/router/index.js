import Vue from 'vue'
import Router from 'vue-router'
import Tag from '@/pages/Tag'
import Pic from '@/pages/Pic'
import Blog from '@/pages/Blog'
import TimeLine from '@/pages/TimeLine'
import Search from '@/pages/Search'
import BlogDetail from '@/pages/Blog/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/timeline',
      name: 'Timeline',
      component: TimeLine
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
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/blog/:id',
      name: 'BlogDetail',
      component: BlogDetail
    }
  ]
})
