import { db } from '@/main'
import { collection, getDocs } from 'firebase/firestore'
import { createStore } from 'vuex'


export default createStore({
  state: {
    loginUser: null,
    tools: null,
    lastId: 3,
  },
  getters: {
    getAllTools(state) {
      return state.tools
    },

    getPopularTools(state){
      if(state.tools != null){
        return state.tools.slice(0,state.lastId)
      }else return null
    },

    getNewTools(state) {
      if (state.tools != null) {
        return state.tools.slice(-4)
      }
    }
  },


  mutations: {
    setLogin(state, user) {
      state.loginUser = user
    },

    setTools(state, data) {
      if (state.tools == null) {
        state.tools = data
      } else {
        state.tools.push(data)
      }
    },

    setLastId(state){
      let newId = state.lastId + 3
      if (newId > state.tools.length) newId = state.tools.length
      state.lastId = newId
    }

  },


  actions: {
    async getTools() {
      let toolsList = new Array;
      const docRef = collection(db, 'tools')
      const docSnap = await getDocs(docRef)
      docSnap.forEach(el => toolsList.push(el))
      this.commit('setTools', toolsList)
    },
  },

 
})
