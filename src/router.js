import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Trend from './views/Trend.vue'
import Push from './views/Push.vue'
import Find from './views/Find.vue'
import My from './views/My.vue'
import Follow from './views/Home/Follow.vue'
import Nearby from './views/Home/Nearby.vue'
import Recommend from './views/Home/Recommend.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'follow',
          name: 'follow',
          component: Follow
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: Recommend
        },
        {
          path: 'nearby',
          name: 'nearby',
          component: Nearby
        }
      ]
    },
    {
      path: '/trend',
      name: 'trend',
      component: Trend
    },
    {
      path: '/push',
      name: 'home',
      component: Push
    },
    {
      path: 'find',
      name: 'find',
      component: Find
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})
