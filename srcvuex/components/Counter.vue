<template> 
  <div>
    計數器；<button @click="minus">-</button>
    <br />
    當前；{{ $store.state.count }}<br />
    計數器；<button @click="add">+</button>

    {{$store.getters.val}}
  </div>
</template>
<script>
import * as Types from '../store/mutations-type';
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    add() {
      //提交add的mutation
      //荷載 payload
      this.$store.commit(Types.INCREMENT,5);
    },
    minus(){
      this.$store.commit(Types.DECREMENT,9);
    }
  },
  computed: {},
  components: {},
};
</script>
<style lang="" scoped>
</style>