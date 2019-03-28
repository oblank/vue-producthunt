import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    date: 0,
    products: []
  },
  mutations: {
    changeDate(state, date) {
      state.date = date
    },
    changeProducts(state, products) {
      state.products = products.data.products
    }
  },
})
