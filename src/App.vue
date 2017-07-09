<template>
  <div id="app">
    <ul class="home">
      <router-link to="/" exact tag="li">Home</router-link>
      <router-link :to="{ path: '/document' }"  tag="li">document</router-link>
      <router-link :to="{ path: '/about' }"  tag="li">about</router-link>
      <router-link :to="{ path: '/user' }"  tag="li">user</router-link>
    </ul>

    <!--<router-view name="slide" style="position: absolute"></router-view>-->

    <transition name="fade">
      <router-view></router-view>
    </transition>

     <div>可以监控路由的元信息，在页面中做出功能{{$route.meta}}</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      index:"/home"
    }
  }
}
</script>

<style>
  .fade-enter{
    opacity: 0
  }
  .fade-enter-active{
    transition: opacity 1s
  }
  .fade-enter-to{
    opacity: 1
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .home{
    overflow: hidden;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #006666;
    list-style: none;
  }
  .home li{
cursor: pointer;
    float: left;
    width: 200px;;
    color: #fff;
    font-size: 35px;
    border-right: 1px solid black;
  }
</style>
