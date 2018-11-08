import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/main/Home.vue'
import Activity from './views/main/Activity.vue'
import Discovery from './views/main/Discovery.vue'
import Personal from './views/main/Personal.vue'
import Main from './views/MainView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main,
      redirect: '/main/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'activity',
          name: 'activity',
          component: Activity
        },
        {
          path: 'discovery',
          name: 'discovery',
          component: Discovery
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal
        }
      ]
    }
  ]
})
