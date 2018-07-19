<template>
<div class="bottom-bar">
  <div class="main-tab"><img :src="picSrc.home.selected" alt=""><p>首页</p></div>
  <div class="main-tab"><img :src="picSrc.activity.unselected" ><p>动态</p></div>
  <div class="main-tab new-activity"><img :src="picSrc.newActivity" alt=""></div>
  <div class="main-tab"><img :src="picSrc.discovery.unselected" alt=""><p>发现</p></div>
  <div class="main-tab"><img :src="picSrc.personal.unselected" alt=""><p>我的</p></div>
</div>
</template>
<script>
export default {
  name: 'BottomBar',
  data () {
    return {
      picSrc: {
        home: {
          selected: require('@/assets/img/ic_tabbar_home_selected.png'),
          unselected: require('@/assets/img/ic_tabbar_home_unselected.png')
        },
        activity: {
          selected: require('@/assets/img/ic_tabbar_activity_selected.png'),
          unselected: require('@/assets/img/ic_tabbar_activity_unselected.png')
        },
        discovery: {
          selected: require('@/assets/img/ic_tabbar_discovery_selected.png'),
          unselected: require('@/assets/img/ic_tabbar_discovery_unselected.png')
        },
        personal: {
          selected: require('@/assets/img/ic_tabbar_personal_selected.png'),
          unselected: require('@/assets/img/ic_tabbar_personal_unselected.png')
        },
        newActivity: require('@/assets/img/new_activity.png')
      }
    }
  }
}
</script>
<style lang="scss">
.bottom-bar{
  display: flex;
  box-shadow: 0 -1px 2px #ccc;
  align-items: center;
  justify-content: space-around;
  position: relative;
  .main-tab {
    width: 15%;
    height: 70%;
    text-align: center;
    position: relative;
    // &:last-child{
    //    &::after{
    //     content: '.';
    //     position: absolute;
    //     top: -3rem;
    //     right: 1.5rem;
    //     color: $jike-yellow;
    //     font-size: 3rem;
    //     width: 0px;
    //     height: 0px;
    //   }
    // }
    img{
      width: 28%;
    }
    p{
      font-size: 0.75rem;
    }
    
  }
  .new-activity{
    height: 60%;
    width: 18%;
    box-sizing: content-box;
    background-color: $jike-blue;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // &::before{
    //   content:'';
    //   box-sizing: content-box;
    //   position:absolute;
    //   width: 13%;
    //   height: 55%;
    //   border: 3px solid $jike-blue;
    //   border-radius: 10px;
    // }
  }
}

</style>
