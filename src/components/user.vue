<template>
  <div>
    <h2>我是user中动态路由</h2>
    <hr/>

    <ul style="width: 350px;border: 1px solid #ddd;margin: 10px auto">
      <router-link
        exact v-for="(item,index) in userlist"
                    key="index"
                   :to="{ path: '/user/'+item.tip+'/'+item.id }"
                   tag="li">
        {{item.userName}}
      </router-link>
    </ul>
    <div v-if="userinfo.userName" style="width: 500px;margin: 50px auto">
      <p>姓名：{{userinfo.userName}}</p>
      <p>性别：{{userinfo.sex}}</p>
      <p>爱好：{{userinfo.hobby}}</p>
    </div>

    <hr/>
<router-view></router-view>
  </div>
</template>

<script>
  let data=[
    {
      id:1,
      tip:'vip',
      userName:"会员一",
      sex:'男',
      hobby:'写代码'
    },
    {
      id:2,
      tip:'vip',
      userName:"会员二",
      sex:'男',
      hobby:'唱歌'
    },
    {
      id:3,
      tip:'common',
      userName:"会员三",
      sex:'男',
      hobby:'读书'
    }
  ];//数组存取所有的状态值
  export default {
      data:function(){
          return{
            userlist:data,
            userinfo:{}
          }
      },
    methods:{
        getData: function () {
          let id=this.$route.params.userId;
          if(id){//找到对应的信息放到提前设置的对象中
            console.log(id);
            this.userinfo=this.userlist.filter(function (item) {
              return item.id == id
            })[0]
          }else{
            userinfo:{}
          }
        }
    },
    created:function(){
      //console.log(this.$route)
      //通过路由信息的id向后台发送ajax请求，渲染对应的数据
     this.getData()

    },
    watch:{
      $route: function () {
        //console.log(this.$route.params)
        this.getData()
      }
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
