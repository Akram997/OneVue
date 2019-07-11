<template>
  <div id="app">
    <van-nav-bar class="title" title="千峰-Vue项目" fixed> </van-nav-bar>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <van-tabbar v-model="active" router>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="0" to="/shopcar"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Tabbar, TabbarItem } from "vant";
Vue.use(NavBar)
  .use(Tabbar)
  .use(TabbarItem);
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>
#app {
  padding-top: 46px;
  overflow-x: hidden;
}
.title {
  background-color: turquoise;
  border-bottom: 1px solid #ccc;
}
.van-tabbar {
  border-top: 1px solid #ccc;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-leave-active,
.v-enter-active {
  transition: all 0.9s ease;
}
</style>

