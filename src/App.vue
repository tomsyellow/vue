<template>
  <div id="app">
    <!--<ul>-->
      <!--<li><a href="http://localhost:8080/#/home">首页</a></li>-->
      <!--<li><a href="http://localhost:8080/#/food">食物</a></li>-->
      <!--<li><a href="http://localhost:8080/#/city/:深圳">城市</a></li>-->
      <!--<li><a href="http://localhost:8080/#/msite">附近</a></li>-->
    <!--</ul>-->
    <!--<router-view></router-view>-->
    <transition name="router-fade" mode="out-in">
      <!--<keep-alive>-->
        <!--<router-view v-if="$route.meta.keepAlive"></router-view>-->
      <!--</keep-alive>-->
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import svgIcon from './components/common/svg'
export default {
  name: 'App',
  components: {
    svgIcon
  }
}

</script>

<style lang="scss">
  /*@import './style/common';*/
  /*.router-fade-enter-active, .router-fade-leave-active {*/
    /*transition: opacity .3s;*/
  /*}*/
  /*.router-fade-enter, .router-fade-leave-active {*/
    /*opacity: 0;*/
  /*}*/
</style>
