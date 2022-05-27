import { createStore } from 'vuex'
const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api'
})

let defaultUser = {
  id: -1,
  email: '',
  token: ''
}

let user = localStorage.getItem('user')
if (!user) {
  user = defaultUser
} 
else {
  try {
    user = JSON.parse(user)
    instance.defaults.headers.common['Authorization'] = user.token
  } catch (err) {
    user = defaultUser
  }
}

export default createStore({
  state: {
    isSideNavOpen: true,
    user: user
  },
  getters: {
  },
  mutations: {
    logUser(state, user) {
      instance.defaults.headers.common['Authorization'] = user.token
      localStorage.setItem('user', JSON.stringify(user))
      state.user = user
    },
    toggleSideNav(state) {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
    logout(state) {
      localStorage.removeItem('user')
      state.user = defaultUser
    }
  },
  actions: {
    login({ commit }, userInfos) {
      return new Promise((resolve, reject) => {
        instance.post('/login', userInfos)
        .then(res => {
          commit('logUser', {
            id: res.data.data.id, 
            email: res.data.data.email, 
            token: 'Bearer ' + res.data.token
          })
          resolve(res)
        })
        .catch(error => reject(error))
      })
    },
    register({ commit }, userInfos) {
      return new Promise((resolve, reject) => {
        instance.post('/register', userInfos)
        .then(res => {
          commit('logUser', {
            id: res.data.data.id,
            email: res.data.data.email,
            token: 'Bearer ' + res.data.token
          })
          resolve(res)
        })
        .catch(error => reject(error))
      })
    },
  },
  modules: {
  }
})
