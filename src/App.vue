<template>
  <div id="app">
    <router-view class="content" />
    <router-view class="mask" name="mask"/>
    <BottomBar class="bottom-tab" :tabs="btmTab"></BottomBar>
  </div>
</template>
<script>
import BottomBar from './components/BottomBar.vue' // 底部导航栏
export default {
  components: {
    BottomBar
  },
  data () {
    return {
      btmTab: [
        {
          name: '首页',
          route: 'home',
          selected: require('@/assets/img/ic_tabbar_home_selected.png'),
          unselected: require('@/assets/img/ic_tabbar_home_unselected.png'),
          canChange: true,
          Badge: 'hasPush'
        },
        {
          name: '动态',
          route: 'activity',
          selected: require('@/assets/img/ic_tabbar_activity_selected.png'),
          unselected: require('@/assets/img/ic_tabbar_activity_unselected.png'),
          canChange: true,
          Badge: ''
        },
        {
          name: '',
          route: 'new-activity',
          selected: require('@/assets/img/new-activity.svg'),
          unselected: require('@/assets/img/new-activity.svg'),
          canChange: false,
          Badge: ''
        },
        {
          name: '发现',
          route: 'discovery',
          selected: require('@/assets/img/ic_tabbar_discovery_selected.png'),
          unselected: require('@/assets/img/ic_tabbar_discovery_unselected.png'),
          canChange: true,
          Badge: ''
        },
        {
          name: '我的',
          route: 'personal',
          selected: require('@/assets/img/ic_tabbar_personal_selected.png'),
          unselected: require('@/assets/img/ic_tabbar_personal_unselected.png'),
          canChange: true,
          Badge: 'hasMessage'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
}
html,body,#app{
  height: 100%;;
}
.content{
  height: 92%;
}
.bottom-tab{
  height: 8%;
  #new-activity img{
    width: 80%;
    height: 90%;
  }
}
a{
  text-decoration: none;
  outline:none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
a:visited, a:link, a:active{
  text-decoration: none;
}
</style>
