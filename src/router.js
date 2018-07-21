import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Activity from './views/Activity.vue'
import Push from './views/Push.vue'
import Discovery from './views/Discovery.vue'
import Personal from './views/Personal.vue'
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
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/push',
      name: 'home',
      component: Push
    },
    {
      path: '/discovery',
      name: 'discovery',
      component: Discovery
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    }
  ]
})
