import * as Types from './mutations-type';

const mutations = {//----5，通過mutation來更改狀態
    [Types.INCREMENT](state,count) {//state是自動放入的，默認指的就是當前的state
        if(isNaN(parseInt(count))) return
        state.count += count;
    },
    [Types.DECREMENT](state,count){
        if(isNaN(parseInt(count))) return
        state.count-=count;
    }
};
export default mutations;