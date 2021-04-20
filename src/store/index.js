import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[]
  },
  mutations: {
    itemPush (state, item) {
      state.items.push(item)
    },
    itemClear (state) {
      state.items = []
    }
  },
  actions: {
  },
  modules: {
  }
})
