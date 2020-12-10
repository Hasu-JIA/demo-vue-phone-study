import Vue from 'vue';//runtime 不支持template 只支持render
// import Home from '../components/Home.vue';
// import Add from '../components/Add.vue';
// import List from '../components/List.vue';
// import Collect from '../components/Collect.vue';
// import Detail from '../components/Detail.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
let router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/Home',
    },
    {
      path: '/home',
      component: ()=>import('../components/Home.vue'),
      meta: { keepAlive: true ,title:'首頁'}
    },
    {
      path: '/add',
      component: ()=>import('../components/Add.vue'),
      meta: { title:'添加'}
    },
    {
      path: '/list',
      component: ()=>import('../components/List.vue'),
      meta: { title:'列表'}
    },
    {
      path: '/collect',
      component:()=>import('../components/Collect.vue'),
      meta: { title:'收藏'}
    },
    // /detail/1 {bid:1} 路徑參數 必須有但是可以隨機
    {
      path: '/detail:bid',
      component:()=>import('../components/Detail.vue'),
      name: 'detail',
      meta: { title:'詳情'}
    },
    {
      path: '*',
      redirect: '/Home'
    },

  ]
})
export default { router, B: 'bbb' }
