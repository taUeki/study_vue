import products from '@./api/products.js'

export default {
  namespaced: true,
  state: {
    detail: {}
  },
  getters: {
    detail: state => state.detail
  },
  mutations: {
    set (state, { detail }) { state.detail = detail }
  },
  actions: {
    load ({commit}, id) {
      products.asyncFind(id, detail => {
        commit('set', {detail})
      })
    },
    destroy ({commit}) {
      commit('clear')
    }
  }
}
