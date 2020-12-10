import Vue from 'vue';
import Vuex from 'vuex';//------1,引用Vuex 
import logger from 'vuex/dist/logger'//logger是一個日志插件
import mutations from './mutations.js';

Vue.use(Vuex);//-------2.使用Vuex
const state = { count: 0 };//----4，寫狀態是一個對象
const getters = {
    val: (state) => state.count % 2 ? '奇數' : '偶數',
}
export default new Vuex.Store({//-----3，新建一個容器store，容器是唯一的
    state,
    mutations,
    getters,
    plugins: [logger()],
    strict: true,//嚴格 只能通過mutation（管理員）來更改狀態，mutation不支持異步
});