<template>
  <div id="app">
    <router-view class="content" />
    <BottomBar class="bottom-bar"></BottomBar>
  </div>
</template>
<script>
import BottomBar from './components/BottomBar.vue' // 底部导航栏
export default {
  components: {
    BottomBar
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
.bottom-bar{
  height: 8%;
}
</style>
