<template>
  <div>
    <MHeader>ホーム</MHeader>
    <div class="content">
      <div v-if="loading">読込み中．．．</div>
      <template v-else>
        <Swiper :data="sliders"></Swiper>
        <div class="container">
          <h3>新刊・話題書</h3>
          <ul class="book">
            <li v-for="(hot, key) in hotBooks" :key="key">
              <img :src="hot.bookCover" />
              <p>{{ hot.bookName }}</p>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import MHeader from "../base/MHeader.vue";
import Swiper from "../base/Swiper.vue";
import { getSliders, getHotBook } from "../api"; //解構賦值 可省略index.js
export default {
  created() {
    //this.getData();
    this.getSlider(); //獲取輪播圖
    this.getHot();
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  data() {
    return { timer: null, sliders: [], hotBooks: [], loading: true };
  },
  destroyed(){
    clearTimeout(this.timer);
  },
  methods: {
    // async getData() {
    //   // let [sliders, hotBooks] = await getAll();
    //   this.sliders = await getSliders();
    //   this.hotBooks = await getHotBook();
    //   this.loading = true;

    //   //輪播圖和熱門圖書獲取完成
    // },
    async getHot() {
      this.hotBooks = await getHotBook();
    },
    async getSlider() {
      //2 he await 搭配使用 await後面要接promise實例
      this.sliders = await getSliders();
      //將獲取的數據放到sliders中
    },
  },
  components: {
    MHeader,
    Swiper,
  },
};
</script>
<style  scoped lang="less">
.container {
  width: 90%;
  margin: 5px auto;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin: 5px auto;
      width: 45%;
      text-align: center;
      img {
        width: 100%;
      }
    }
  }
}
h3 {
  color: gray;
  padding: 5px;
}
</style>