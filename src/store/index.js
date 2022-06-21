import { createStore } from 'vuex'


export default createStore({
  state: {
    loginUser: null
  },
  getters: {
  },
  mutations: {
    setLogin(state,user){
      state.loginUser = user
    }
  },
  actions: {
  },
  modules: {
  }
})
