<template>
  <div id="app">
    <van-nav-bar class="title" title="千峰-Vue项目" fixed> </van-nav-bar>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">通讯录</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar,Tabbar, TabbarItem } from "vant";
Vue.use(NavBar).use(Tabbar).use(TabbarItem);;
export default {
  data(){
    return {
      active:0
    }
  }
};
</script>

<style scoped>
#app {
  padding-top: 46px;
}
.title{
  background-color: turquoise;
  border-bottom: 1px solid #ccc;
}
.van-tabbar{
  border-top: 1px solid #ccc;
}
</style>

