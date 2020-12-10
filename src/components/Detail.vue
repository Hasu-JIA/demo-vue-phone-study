<template>
  <div class="detail">
    <MHeader :back="true">詳情</MHeader>
    <div>
      <ul>
        <li>
          <label for="bookName">書的名字</label>
          <input type="text" v-model="book.bookName" id="bookName" />
        </li>
        <li>
          <label for="bookInfo">書的信息</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo" />
        </li>
        <li>
          <label for="bookPrice">書的價格</label>
          <input type="text" v-model.number="book.bookPrice" id="bookPrice" />
        </li>
        <li>
          <button @click="update">確認修改</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import MHeader from "../base/MHeader";
import { getDetail, updateBook } from "../api";
export default {
  name: "Detail",
  data() {
    return { book: {} };
  },
  watch: {
    $route() {
      //只要路徑變化 重新獲取數據
      this.getData();
    },
  },
  computed: {
    bid() {//將路徑參數的id映射到bid上
      return this.$route.params.bid;
    },
  },
  components: {
    MHeader,
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {//通過id找到某一項后，賦值給book
      this.book = await getDetail(this.bid);
      console.log('this.book: ', this.book);
      Object.keys(this.book).length > 0 ? void 0 : this.$router.push("/list");
    },
      async update(){//修改圖書信息
      console.log('update')
      const resBook = await updateBook(this.bid,this.book)
      console.log('resBook: ', resBook);
          this.$router.push('/list');
      },
  },
};
</script>
<style  scoped lang="less">
.detail {
  position: absolute;
  background: #ffffff;
  top: 0;
  left: 0;
  bottom: 50px;
  right: 0;
  z-index: 100;
}
ul {
  margin: 50px 20px;
}
li {
  margin-bottom: 20px;
  label {
    display: block;
    font-size: 18px;
    margin: 10px 0;
  }
  input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgb(173, 172, 172);
    font-size: 15px;
  }
  button {
    display: block;
    width: 80px;
    height: 40px;
    background: #1591e4;
    color: white;
    border: none;
    font-size: 15px;
  }
}
</style>