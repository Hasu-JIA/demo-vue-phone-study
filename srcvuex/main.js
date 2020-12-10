
//vuex只能在vue中使用（單獨為vue開發的）

//vuex 爲了大型項目，主要是（狀態）管理，將數據統一管理  data
//多個組件共同管理數據



import Vue from 'vue';
import App from './App.vue';
import store from './store';


new Vue({
    el: '#app',
    ...App,
    store //store被注冊到實例上 所有組件都會有一個屬性 this.$store
});