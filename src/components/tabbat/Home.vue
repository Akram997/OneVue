<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in listimg" :key="item.img"
        ><img :src="item.img" alt="" class="lbimg"
      /></van-swipe-item>
    </van-swipe>
    <van-grid :gutter="50" :column-num="2" square>
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem,Grid,GridItem } from "vant";

Vue.use(Swipe).use(SwipeItem).use(Grid).use(GridItem);
export default {
  data() {
    return {
      listimg: [
        { name: 1, img: require("./images/g1.jpg") },
        { name: 2, img: require("./images/g2.jpg") },
        { name: 3, img: require("./images/g3.jpg") },
        { name: 4, img: require("./images/g4.jpg") },
        { name: 5, img: require("./images/g5.jpg") }
      ]
    };
  }
};
</script>

<style scoped>
.lbimg {
  width: 100%;
  height: 200px;
}
</style>
