<template>
  <div>
    <h2>我是About</h2>
    <hr/>
    <ul>
      <router-link exact :to="{ path: '/about/hobby' }" tag="li">
        hobby
      </router-link>
      <router-link :to="{ path: '/about/study' }" tag="li">
        study
      </router-link>
      <router-link :to="{ path: '/about/work' }" tag="li">
        work
      </router-link>
    </ul>
<div>
  测试数据:{{text}}
</div>

    <hr/>
<router-view></router-view>
  </div>
</template>

<script>
  export default {
      data: function () {
        return {
          text:"测试前"
        }
      },
    beforeCreate: function () {
      console.log("beforeCreate")
    },
    beforeRouteEnter:function (to, from, next) {
      //由于在路由进入之前，实例没有初始化完成，所以只有在next回调函数中拿到实例对象
      console.log(this);
      next(function (vm) {
        return vm.text="aa"
      })
   },
    beforeRouteUpdate:function (to, from, next) {
      //在组件中有二级导航的时候 每次更新后执行
      next()
    },
    beforeRouteLeave : function (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
      next()
     }
  }
</script>


<style>
  ul{overflow: hidden}
li{
  list-style: none;
  float: left;
  color: black;
  margin-right: 20px;
  font-size: 30px;cursor: pointer;
}
</style>
