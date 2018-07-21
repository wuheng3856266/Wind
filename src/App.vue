<template>
  <div id="app">
    <app-header></app-header>

    <keep-alive>
       <router-view></router-view>
    </keep-alive>

    <appfooter></appfooter>
    
  </div>
</template>


<script>

import AppHeader from './components/common/AppHeader.vue'
import Appfooter from './components/common/Appfooter.vue'
export default {
    components:{
      AppHeader,
      Appfooter
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
