<template>
  <div id="app">
    <!--實現路由動畫-----需要緩存的-->
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>

    <!--正常訪問的-->
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from "./base/Tab";
export default {
  name: "App",
  components: {
    Tab,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
button,
input {
  -webkit-appearance: none;
}
.content {
  position: fixed;
  width: 100%;
  top: 40px;
  bottom: 50px;
  overflow: auto;
}
.fadeIn-enter{
  opacity: 0;
}
.fadeIn-enter-active{
  transition: all 0.3s linear;
}
.fadeIn-leave-active{
  transition: all 0.3s linear;
  opacity: 0;
}
</style>
