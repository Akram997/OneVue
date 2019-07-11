import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/tabbat/Home.vue'
import ShopCar from '../components/tabbat/ShopCar.vue'
import Search from '../components/tabbat/Search.vue'
import Member from '../components/tabbat/Member.vue'

let router = new VueRouter({
    routes: [
        {path:'/',component:Home},
        {path:'/home',component:Home},
        {path:'/shopcar',component:ShopCar},
        {path:'/search',component:Search},
        {path:'/member',component:Member}
    ]
})

export default router;