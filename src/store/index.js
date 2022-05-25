import { createStore } from 'vuex'
import { auth, usersCollection } from '../assets/includes/firebase';

export default createStore({
  state: {
    isSideNavOpen: true,
    userLoggedIn: false,
  },
  getters: {
  },
  mutations: {
    toggleSideNav(state) {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    }
  },
  actions: {
    async register({ commit }, payload) {
      const userCred = await auth.createUserWithEmailAndPassword(
        payload.email, payload.password,
      );

      await usersCollection.doc(userCred.user.uid).set({
        email: payload.email,
      });

      commit('toggleAuth');
    }
  },
  modules: {
  }
})
