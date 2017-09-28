import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Map from '@/components/Map'
import statistic from '@/view/statistic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/test',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: statistic
    }
  ]
})
