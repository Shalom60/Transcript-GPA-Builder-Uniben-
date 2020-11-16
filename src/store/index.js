import Vue from 'vue'
import Vuex from 'vuex'

import home from '@/views/Home.vue'
Vue.use(Vuex)



export default new Vuex.Store({
  state: {  
    home
},
mutations: {
  appendUser (state, payload) {
    const { name, faculty, department, matno, level } = {}
    Vue.set(state.home.data().formFin,  { name, faculty, department, matno, level }, payload.Data)
  }
},
actions: {
  userData: ({commit}, payload) => {
    commit('appendUser', payload)
  }
},
getters: {
  userCall: (state)=> {
    return state.home.data().formFin 
  }

},
  modules: {
  }
})
