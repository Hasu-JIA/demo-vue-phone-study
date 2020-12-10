##
- mock 模擬數據
- api 代表所有接口
- base 基礎組件
- components 頁面組件

## 熱門圖書功能
- 先寫服務端 確保數據能正常返回
- 增加api方法 實現調取數據的功能
- 在哪個組件中應用這個api ，如果是一個基礎組件需要用這些數據
在使用這個組件的父級中調用這個方法，將數據傳遞給基礎組件
- 寫一個基礎組件
    - 1，創建一個，vue文件
    - 2，在需要使用這個組件的父級組件中引用這個組件
    - 3，在組建中注冊
    - 4，以標簽的形式引入
## 路由元信息
- 實現緩存
    - //實現緩存的
     {
      path: '/home',
      component: Home,
      meta: { keepAlive: true }
    },
   <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
   </keep-alive>
    - //正常訪問的
    <router-view v-if="!$route.meta.keepAlive"></router-view>

- 路由動畫
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>

    - //動畫樣式

    .fadeIn-enter{
        opacity:0;
    }
    .fadeIn-enter-active{
        transition:all 0.3s linear;
    }
    .fadeIn-leave-active{
        transition:all 0.3s linear;
        opacity:0;
    }
## 下拉加載
- 默認每次給5條，前端告訴後臺現在要從第幾條給我
- /page?offset=5,
- 後臺返回時還要告訴前端是否有更多的數據 hasMore:false

## 