import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import map from './modules/map'

Vue.use(Vuex)


export default new Vuex.Store({
  actions,
  getters,
  modules: {
    map
  }
})