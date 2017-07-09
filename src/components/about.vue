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

    <hr/>
<router-view></router-view>
  </div>
</template>

<script>
  export default {

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
