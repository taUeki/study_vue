import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messsage: '初期メッセージ',
    count: 0,
    name: 'キマイラ',
    list: [
      {id: 1, name: 'スライム', hp: 2200},
      {id: 2, name: 'ゴブリン', hp: 3300},
      {id: 3, name: 'ドラゴン', hp: 2900}
    ]
  },
  getters: {
    messsage (state) {
      return state.messsage
    },
    count (state) {
      return state.count
    }
  },
  mutations: {
    setMessage (state, payload) {
      state.messsage = payload.message
    },
    increment: function (state, number) {
      state.count = state.count + number
    },
    doAdd: function (state, array) {
      state.list.push(array)
    }
  },
  actions: {
    doUpdate ({ commit }, message) {
      commit('setMessage', { message })
    }
  }
})
