<template>
  <div class="footer">
    <router-link to="/home"
      ><i class="icon-home"></i><span>ホーム</span></router-link
    >
    <router-link to="/add">
      <i class="icon-home"></i><span>追加</span></router-link
    >
    <router-link to="/list"
      ><i class="icon-home"></i><span>リスト</span></router-link
    >
    <router-link to="/collect"
      ><i class="icon-home"></i><span>カート</span></router-link
    >
  </div>
</template>
<script>
export default {
  name: "Tab",
};
</script>
<style  scoped lang="less">
.icon-home:before {
  content: "\e900";
}
.icon-list2:before {
  content: "\e9bb";
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #cccccc;
  display: flex;

  a {
    display: flex;
    flex: 1;
    color: rgb(21, 145, 228);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
  }
  a.router-link-active{
      color: #ff9a15;
  }
}
// .footer {
//   position: fixed;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   height: 50px;
//   border-top: 1px solid #cccccc;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   flex-direction: row;

//   a {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//   }
// }
// .parent{
//     display: flex;
//     align-items: center; //shu
//     justify-content: center;//heng
//     flex-direction: row;//fangxiang column shu

//     .child{
//         align-self: start;
//         display: flex;
//         flex-direction: column;//shu
//         .icon{

//         }
//         a{

//         }
//     }
// }
</style>