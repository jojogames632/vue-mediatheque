import { createStore } from 'vuex'

export default createStore({
  state: {
    isSideNavOpen: true,
  },
  getters: {
  },
  mutations: {
    TOGGLE_SIDENAV(state) {
      state.isSideNavOpen = !state.isSideNavOpen
    }
  },
  actions: {
    toggleSidenav({ commit }) {
      commit('TOGGLE_SIDENAV')
    }
  },
  modules: {
  }
})
