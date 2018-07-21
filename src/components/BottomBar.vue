<template>
<div class="bottom-tab">
  <div class="main-tab" :id="tab.route" v-for="tab in tabs" @click="handleBtmTab(tab)" :class="{'active-bottom-tab': tab.route == activeTab}">
    <img :src="badgeSrc" class="tab-badge" v-if="tab.Badge" v-show="$store.state[tab.Badge]">
    <div v-if="tab.route == 'personal'" class="tab-notification" v-show="$store.state.showMessage" style="transform:none;">
        <img :src="notificationSrc">{{$store.state.messageCount}}
    </div>
    <img :src="tab.route == activeTab ? tab.selected:tab.unselected">
    <p v-if="tab.name">{{tab.name}}</p>
  </div>
</div>
</template>
<script>

export default {
  name: 'BottomBar',
  props: {
    tabs: Array
  },
  data () {
    return {
      activeTab: 'home',
      badgeSrc: require('@/assets/img/dot.png'),
      notificationSrc: require('@/assets/img/ic_common_notification_messages.png')
    }
  },
  methods: {
    handleBtmTab (tab) {
      if (tab.canChange) {
        this.activeTab = tab.route
        this.$router.push(`/${tab.route}`)
      }
    }
  },
  watch: {
  },
  mounted () {
    if (this.$store.state.hasMessage) {
      this.$store.commit('letMessageShow')
    }
  }
}
</script>
<style lang="scss">
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
    > img{
      height: 35%;
      width: 35%;
      user-select:none;
      pointer-events: none;
      transition: all 0.5s ease;
    }
    p{
      font-size: 0.75rem;
      transition: all 0.5s ease;
    }
    .tab-badge{
      color: $jike-yellow;
      position: absolute;
      top: 0rem;
      right: 0.5rem;
    }
  }
}
.active-bottom-tab>img,
.active-bottom-tab>p{
  transform: scale(1.1);
  transition: all 0.5s ease;
  color: $jike-blue;
}
.tab-notification{
  position: absolute;
  width: 100%;
  height: 60%;
  top: -80%;
  background-color: $jike-yellow;
  color: black;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  >img{
    height: 80%;
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
</style>
