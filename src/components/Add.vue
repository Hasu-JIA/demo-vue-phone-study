<template>
  <div class="add">
    <MHeader :back="true">追加</MHeader>
    <div class="content">
      <ul>
        <li>
          <label for="bookName">本の名前</label>
          <input type="text" v-model="book.bookName" id="bookName" />
        </li>
        <li>
          <label for="bookInfo">本の内容</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo" />
        </li>
        <li>
          <label for="bookPrice">税込価格</label>
          <input type="text" v-model.number="book.bookPrice" id="bookPrice" />
        </li>
        <li>
          <label for="bookPrice">ブックカバー</label>
          <input type="text" v-model.number="book.bookCover" id="bookCover" />
        </li>
        <li>
          <button @click="add">追加</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import MHeader from "../base/MHeader.vue";
import {addBook} from "../api";
export default {
  data() {
    return { book:{} };
  },
  methods:{
      async add(){
          await addBook(this.bid,this.book);
          this.$router.push('/list');
      }
  },
  components: {
    MHeader,
  },
};
</script>
<style  scoped lang="less">
.add {
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