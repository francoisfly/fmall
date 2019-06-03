<template>
  <div id="app">
    
    <router-view >
    </router-view>
    <TabBar></TabBar> 
  </div>
</template>
<script>
import "./assets/normalize.css";
import "./assets/font/iconfont.css";
import "./assets/font/iconfont.js";
import "../src/lib/hotcss/hotcss.js";
import TabBar from "./views/TabBar.vue";
export default {
   name: 'app', 
   components: {TabBar} 
}
</script>

<style lang="scss">
</style>
