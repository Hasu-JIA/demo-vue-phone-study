<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(slide, key) in sliders" :key="key">
        <!-- Slide {{slide}} -->
        <img :src="slide" alt="">
        </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { getSliders } from '../api/index';
export default {
  name: "carrousel",
  props:[],
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 1000,
        },
        pagination: {
          el: ".swiper-pagination",
        },

        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        // Some Swiper option/callback...
      },
      sliders: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
      //promise就可以then
      getSliders().then(res=>{
          this.sliders=res;
      },err=>{
      console.log('err: ', err);

      })
  },



};
</script>

<style lang="less" scoped>
// scoped 全局
img{
    width: 100%;
}
.swiper-container {
  height: 200px;
  width: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>