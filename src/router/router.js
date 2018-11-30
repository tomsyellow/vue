import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
// import food1 from '../page/food/food'
// import xixi from '../page/xixi/xixi'
// import home from '../page/home/home'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
Vue.use(Router)
export default new Router({
  routes: [
    // 顶层路由
    {
      path: '/',
      component: App, // 对应App对应外面的index.html
      children: [
        // 二级路由
        {
          path: '',
          direction: '/home'
        },
        // home组件首页列表
        {
          path: '/home',
          component: home
        },
        // 当前选择城市页
        {
          path: '/city/:cityid',
          component: city
        },
        // 附近
        {
          path: '/msite',
          component: msite,
          meta: {keepAlive: true}
        },
        // 食物
        {
          path: '/food',
          component: food
        },
        // 搜索页
        {
          path: '/search/:geohash',
          component: search
        }
      ]
    }
  ]
})
