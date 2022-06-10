import { createStore } from 'vuex'
import axiosInstance from '../services/api'

let defaultUser = {
  id: -1,
  email: '',
  token: '',
  avatar: '',
}

let user = localStorage.getItem('user')
if (!user) {
  user = defaultUser
}
else {
  try {
    user = JSON.parse(user)
    axiosInstance.defaults.headers.common['Authorization'] = user.token
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
      axiosInstance.defaults.headers.common['Authorization'] = user.token
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
        axiosInstance.post('/login', userInfos)
        .then(res => {
          commit('logUser', {
            id: res.data.data.id, 
            email: res.data.data.email, 
            token: 'Bearer ' + res.data.token,
            avatar: res.data.data.avatar
          })
          resolve(res)
        })
        .catch(error => reject(error))
      })
    },
    register({ commit }, userInfos) {
      return new Promise((resolve, reject) => {
        axiosInstance.post('/register', userInfos)
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
