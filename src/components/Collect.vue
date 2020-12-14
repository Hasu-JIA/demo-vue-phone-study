<template>
  <div>
    <MHeader :back="true">カート</MHeader>
  </div>
</template>
<script>
import MHeader from '../base/MHeader.vue';
export default {
  data() {
    return { msg: "collect" };
  },
  components:{
      MHeader
  }
};
</script>
<style  scoped>
</style>