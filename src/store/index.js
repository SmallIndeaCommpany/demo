import { db } from '@/main'
import { collection, getDocs } from 'firebase/firestore'
import { createStore } from 'vuex'


export default createStore({
  state: {
    loginUser: null,
    tools: null,
  },
  getters: {
    getAllTools(state){
      return state.tools
    },
    getNewTools(state){
      let toolsList = new Array;
      if (state.tools != null){
        for (let i = 0; i<4; i++){
          toolsList.push(state.tools[i])
        }
      }
      return toolsList
    }
  },
  mutations: {
    setLogin(state, user) {
      state.loginUser = user
    },
    setTools(state, data) {
      state.tools = data
    }
  },
  actions: {
    async getTools() {
      let toolsList = new Array;
      const docRef = collection(db, 'tools')
      const docSnap = await getDocs(docRef)
      docSnap.forEach(el => toolsList.push(el))
      this.commit('setTools',toolsList)
    }
  },
  modules: {
  }
})
