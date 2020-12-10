import Vue from 'vue';//runtime 不支持template 只支持render
import App from './App.vue';
import OBJ from './router';
//導入輪播圖插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
//圖片懶加載
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://www.material-land.com/material/1180.png',
  loading: 'http://www.kilobotics.com/img/loading.gif',
  attempt: 1
});

//使用輪播圖插件
Vue.use(VueAwesomeSwiper);
const { router, B } = OBJ;
console.log(B)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
//在進入路由之前，每一次都會執行此方法，全局鈎子，有攔截功能
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title;
  if(to.path==='/list'){
    //next({path:'/add'});    //有攔截功能
    next();
  }else{
    next();
  }
});


