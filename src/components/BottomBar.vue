<template>
<div class="bottom-tab">
  <div class="main-tab" :id="tab.route" v-for="tab in tabs" @click="handleBtmTab(tab)" :class="{'active-bottom-tab': tab.route == activeTab}">
    <img :src="badgeSrc" class="tab-badge" v-if="tab.Badge" v-show="$store.state[tab.Badge]">
    <div v-if="tab.route == 'personal'" class="tab-notification" v-show="$store.state.showMessage" style="transform:none;">
        <img :src="notificationSrc">{{$store.state.messageCount}}
    </div>
    <div class="tab-img">
      <img :src="tab.route == activeTab ? tab.selected:tab.unselected">
    </div>
    <p v-if="tab.name">{{tab.name}}</p>
  </div>
</div>
</template>
<script>

export default {
  name: 'BottomBar',
  props: {
    tabs: Array // 传入的tabs
  },
  data () {
    return {
      activeTab: 'home',
      badgeSrc: require('@/assets/img/dot.png'),
      notificationSrc: require('@/assets/img/ic_common_notification_messages.png')
    }
  },
  methods: {
    handleBtmTab (tab) { // 处理路由
      if (tab.canChange) {
        this.activeTab = tab.route
        this.$router.push(`/main/${tab.route}`)
      } else {
        this.$router.push(`/${tab.route}`)
      }
    }
  },
  watch: {
  },
  mounted () {
    if (this.$store.state.hasMessage) { // 测试用
      this.$store.commit('letMessageShow')
    }
  }
}
</script>
<style lang="scss">
@mixin tabScale($scale,$time){
  transform: scale($scale);
  transition: all $time ease;
}
.bottom-tab{
  display: flex;
  box-shadow: 0 -1px 2px #ccc;
  align-items: center;
  justify-content: space-around;
  position: relative;
  user-select:none;
  color: $jike-gray;
  .main-tab {
    width: 15%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .tab-img{
      width: 35%;
      img{
        width: 100%;
        user-select:none;
        pointer-events: none;
      }
    }
    p{
      font-size: 0.75rem;
    }
    .tab-badge{
      color: $jike-yellow;
      width: 35%;
      position: absolute;
      top: 0rem;
      right: 0.5rem;
    }
  }
}
.active-bottom-tab{
  >p,.tab-img{
  @include tabScale(1.1, 0.3s);
  color: $jike-blue;
  // animation:blah 1s;
  }
}
.tab-notification{
  position: absolute;
  width: 100%;
  height: 60%;
  top: -80%;
  font-size: 0.8rem;
  background-color: $jike-yellow;
  color: black;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  >img{
    height: 50%;
    margin-right: 10%;
  }
  &::before{
    content: '';
    display: block;
    position: absolute;
    bottom: -0.8rem;
    right: 28%;
    width:0px;
    height:0px;
    border-left:1rem solid transparent;
    border-right:1rem solid transparent;
    border-top:1.2rem solid $jike-yellow;
  }
}
#newActivity div img{
  transform: scale(2.5);
}
</style>
