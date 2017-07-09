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

import login from '@/views/login'

Vue.use(Router);

 let router=new Router({
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
      component: home,
      meta: { index: 1 ,title:"home"}//路由元信息
    },
    {
      path: '/user/:vip?/:userId?',//动态路由形式
      component: user,
      meta: { index: 4 }
    },
    {
      path: '/home',
      name: 'Home',
      component: home,
      alias:"Home"
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/document',
      name: 'Document',
      meta: { index: 2 ,isLogin:true,title:"docuemnt"},
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
          component: hobby,
          meta: { index: 3 ,title:"about"}
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
export default router

//全局的导航钩子函数
/*router.beforeEach((to, from, next) => {
  console.log(to);
  if(to.meta.isLogin){//如果当前页是需要登录，则重定向到登录页
      next("/login")
  }else{
    next()
  }
});*/
//进入路由后改变titie
/*router.afterEach((to, from) => {;
  if(to.meta.title){//如果当前页是需要登录，则重定向到登录页
   window.document.title=to.meta.title
  }else{
    window.document.title="title"
  }
});*/


