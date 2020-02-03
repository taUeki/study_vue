import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: '初期メッセージ',
    count: 0,
    name: 'キマイラ',
    list: [
      {id: 1, name: 'スライム', hp: 2200},
      {id: 2, name: 'ゴブリン', hp: 3300},
      {id: 3, name: 'ドラゴン', hp: 2900}
    ]
  },
  getters: {
    message (state) {
      return state.message
    },
    count (state) {
      return state.count
    }
  },
  mutations: {
    setMessage (state, payload) {
      state.message = payload.message
    },
    increment: function (state, number) {
      state.count = state.count + number
    }
  },
  actions: {
    doUpdate ({ commit }, message) {
      commit('setMessage', { message })
    }
  }
})
