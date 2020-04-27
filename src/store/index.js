import Vue from 'vue'
import Vuex from 'vuex'
import CovidService from '../services/CovidService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    summary: {},
  },
  mutations: {
    FETCH_BRAZIL_DATA(state, data) {
      // state.data.push(data)
      this.state.summary = data
    },
  },
  actions: {
    fetchBrazilData({ commit }) {
      CovidService.getSummaryBrazil()
        .then((response) => {
          commit('FETCH_BRAZIL_DATA', response.data)
        })
    },
  },
  modules: {
  },
})
