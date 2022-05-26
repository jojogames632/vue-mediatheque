import { createStore } from 'vuex'
const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export default createStore({
  state: {
    isSideNavOpen: true,
    userLoggedIn: false,
    user: {
      id: -1,
      email: '',
      token: ''
    }
  },
  getters: {
  },
  mutations: {
    logUser(state, user) {
      state.user = user
    },
    toggleSideNav(state) {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
  },
  actions: {
    login({ commit }, userInfos) {
      return new Promise((resolve, reject) => {
        instance.post('/login', userInfos)
        .then(res => {
          commit('logUser', {id: res.data.data.id, email: res.data.data.email, token: res.data.token})
          resolve(res)
        })
        .catch(error => reject(error))
      })
    },
    register({ commit }, userInfos) {
      return new Promise((resolve, reject) => {
        instance.post('/register', userInfos)
        .then(res => {
          commit('logUser', {id: res.data.data.id, email: res.data.data.email, token: res.data.token})
          resolve(res)
        })
        .catch(error => reject(error))
      })
    },
  },
  modules: {
  }
})
