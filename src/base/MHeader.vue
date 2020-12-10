<template>
    <div class="header">
        <slot></slot>
        <i class="icon-home" v-if="back" @click="goBack"></i>
    </div>
</template>
<script>
export default {
    props:{
        back:{
            type:Boolean,
            default:false,
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style  scoped lang="less">
    .header{
        position: fixed;
        top: 0; 
        left: 0;
        width: 100%;
        background:  rgb(21, 145, 228);
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: white;
        i{
            position: absolute;
            left: 10px;
            font-size: 20px;
        }
    }

</style>