import * as types from '../mutation-types'
import Chm from '@/core/Chm'

// initial state shape: [{ id, quantity }]
const state = {
  loaded: false,
  apiLoaded: false,
  layers:[],
}

// getters
const getters = {
  checkMapLoaded: state => state.loaded,
  checkApiLoaded: state => state.apiLoaded

}

// actions
const actions = {
  mapLoaded({
    commit,
    state
  }, param) {
    commit(types.MAP_LOADED)
  },
  apiLoaded({
    commit,
    state
  }, param) {
    commit(types.API_LOADED)
  },
  getLayers({
    commit,
    state
  }, param) {

    const layers =Chm.view?Chm.view.map.allLayers:[];

    commit(types.GET_LAYERS,Chm.view.map.allLayers)
  }
}

// mutations
const mutations = {
  [types.MAP_LOADED](state, param) {
    state.loaded = true;
    console.log('%c mapView loaded','color:green');
  },
  [types.API_LOADED](state, param) {
    state.apiLoaded = true;
    console.log('%c api loaded','color:green');
  },
  [types.GET_LAYERS](state, param) {
    state.layers = param;
    console.log('%c api loaded','color:green');
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}