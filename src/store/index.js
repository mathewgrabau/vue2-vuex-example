import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: 'Mathew',
    lastName: 'Grabau',
    favoriteColor: 'purple',
    profession: 'engineer'
  },
  getters: {
    name (state) {
      return `${state.firstName} ${state.lastName}`
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
