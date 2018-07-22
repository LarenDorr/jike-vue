<template>
  <div id="app">
    <keep-alive>
      <router-view class="main" />
    </keep-alive>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
.main{
  height: 100%;
}
a{
  text-decoration: none;
  outline:none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
a:visited, a:link, a:active{
  text-decoration: none;
}
.mask{
  position: relative;
  top: 8%;
}
</style>
