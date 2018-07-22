import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasMessage: true,
    showMessage: false,
    messageCount: 34,
    hasPush: false
  },
  mutations: {
    newMessage (count) {
      this.state.hasMessage = true
      this.state.messageCount = count
    },
    newPush () {
      this.state.hasPush = true
    },
    letMessageShow () {
      this.state.showMessage = true
      // setInterval(() => { this.state.showMessage = false }, 5000)
    }
  },
  actions: {

  }
})
