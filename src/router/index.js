import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import user from '@/components/user'
import home from '@/components/home'
import document from '@/components/document'
import about from '@/components/about'

import hobby from '@/views/hobby'
import study from '@/views/study'
import work from '@/views/work'
import slide from '@/views/slide'

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior:function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/user/:vip?/:userId?',//动态路由形式
      component: user
    },
    {
      path: '/home',
      name: 'Home',
      component: home,
      alias:"Home"
    },
    {
      path: '/document',
      name: 'Document',
      components:{
        default: document,
        slide:slide
      }

    },
    {
      path: '/about',
      component: about,
      children:[
        {
          path: 'study',
          component: study
        },
        {
          path: 'work',
          component: work
        },
        {
          path: '',
          component: hobby
        }
      ]
    },
    { path: '*',
      //redirect: '/about'
    },
    { path: '/abc', redirect: to => {
      // 方法接收 目标路由 作为参数
      return "/home";
      // return 重定向的 字符串路径/路径对象
       }
    }
  ]
})
