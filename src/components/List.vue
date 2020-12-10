<template>
  <div>
    <MHeader :back="true">list</MHeader>
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link
          v-for="(book, index) in books"
          :key="index"
          :to="{ name: 'detail', params: { bid: book.bookId } }"
          tag="li"
        >
          <img v-lazy="book.bookCover" alt="" />
          <div>
            <h4>{{ book.bookName }}</h4>
            <p>{{ book.bookInfo }}</p>
            <b>${{ book.bookPrice }}</b>
            <div class="btn-list">
              <button @click.stop="remove(book.bookId)">削除</button>
              <button @click.stop>添加</button>
            </div>
          </div>
        </router-link>
      </ul>
      <div @click="more" class="more">加載更多</div>
    </div>
  </div>
</template>
<script>
import MHeader from "../base/MHeader.vue";
import { getBookList, removeBook } from "../api";
export default {
  data() {
    return {
      msg: "list",
      books: [],
      offset: 0,
      hasMore: true,
      isLoading: false,
    };
  },
  mounted() {
    let scroll = this.$refs.scroll; //獲取到要拖拽的元素
    let top = scroll.offsetTop;
    let distance = 0;
    let isMove=false;
    scroll.addEventListener(
      "touchstart",
      (e) => {
        if (scroll.scrollTop != 0 || scroll.offsetTop != top) return;
        //手指點擊的開始
        let start = e.touches[0].pageY;
        let move = (e) => {
          isMove=true;
          let current = e.touches[0].pageY;
          //求手触摸拉动的距离，负的话是往上移，就忽略
          distance = current - start;
          if (distance > 0) {
            if (distance <= 50) {
              // 要拖动的元素賦值， 赋上拖动的距离加上距离顶部的距离
              scroll.style.top = distance + top + "px";
              console.log("獲取數據");
            } else {
              //如果大於50了，就默認是50像素
              distance = 50;
              scroll.style.top = top + "50px";
            }
          } else {
            //如果是負值，移除掉move和end事件
            scroll.removeEventListener("touchmove", move);
            scroll.removeEventListener("touchend", end);
          }
        };
        let end = () => {
          if(!isMove) return
          isMove=false;
          clearInterval(this.timerEnd);
          this.timerEnd = setInterval(() => {
            if (distance <= 0) {
              clearTimeout(this.timerEnd);
              distance = 0;
              scroll.style.top = top + "px";
              // 结束的时候也清掉touch事件
              scroll.removeEventListener("touchmove", move);
              scroll.removeEventListener("touchend", end);
              //先清空数据
              this.books = [];
              this.offset = 0;
              this.getDate();
              return;
            }
            distance -= 1;
            scroll.style.top = distance + top + "px";
          }, 1);
        };
        scroll.addEventListener("touchmove", move);
        scroll.addEventListener("touchend", end);
      },
      false
    );
  },
  components: {
    MHeader,
  },
  created() {
    this.getDate();
  },
  methods: {
    loadMore() {
      //觸法scroll事件 可能觸法n次 先進來一個定時器，下次觸發時將上一次定時器清除掉
      clearTimeout(this.timer); //防抖
      this.timer = setTimeout(() => {
        //   -卷去的高度   -可見區的高度  -卷去的總高度
        let { scrollTop, clientHeight, scrollHeight } = this.$refs.scroll;
        if (scrollTop + clientHeight + 20 > scrollHeight) {
          this.getDate(); //獲取更多
        }
      }, 130);
    },
    more() {
      this.getDate();
    },
    async remove(id) {
      await removeBook(id);
      this.books = this.books.filter((item) => item.bookId != id);
    },
    async getDate() {
      if (this.hasMore && !this.isLoading) {
        this.isLoading = true;
        let { hasMore, data } = await getBookList(this.offset);
        this.books = [...this.books, ...data]; //獲取書放到books屬性上
        this.hasMore = hasMore;
        this.isLoading = false; // 加载完成
        this.offset = this.books.length;
      }
    },
  },
};
</script>
<style  scoped lang="less">
.content ul {
  padding: 5px;
  li {
    display: flex;
    padding: 10px 10px;
    border-bottom: 1px solid #cccccc;

    img {
      width: 130px;
      height: 150px;
      margin-right: 10px;
    }
    div h4 {
      font-size: 18px;
    }
    div p {
      font-size: 12px;
    }
    div b {
      color: rgb(245, 73, 21);
    }
      button {
      display: block;
      width: 50px;
      height: 30px;
      background: rgb(241, 85, 12);
      color: white;
      font-size: 12px;
      border-radius: 10px;
      border: rgb(241, 85, 12);
    }
  }
}
.more {
  margin: 10px;
  background: #1591e4;
  text-align: center;
  font-size: 20px;
  color: white;
  height: 40px;
  line-height: 40px;
}
.btn-list{
  display: flex;
  justify-content: space-around;
  
}
</style>