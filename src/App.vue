<template>
  <div id="app">
    <router-view/>
    <BottomBar></BottomBar>
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
</style>
