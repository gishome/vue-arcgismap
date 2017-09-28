import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '@/config/config'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    allLayers: [],
    selectedLayers: [],
    test: 'test',
    ui: {
      searchPane: {
        active: false
      }
    }
  },
  getters: {
    getAllLayers: state => state.allLayers,
    getSelectedLayers: state => state.selectedLayers,
    getRouterQuery: state => state.route.query,
    getTest: state => state.test,
    getSearchPaneActive: state=> state.ui.searchPane.active
  },
  actions: {
    loadLayers({commit,payload,option}) {
  
      axios
        .get(config.getUrl())
        .then(response => {
          const layers = response.data.results;
          commit('ADD_LAYERS', layers)
        })
        .catch(error => console.log(error))
    },
    searchPane(context,param) {
      if(param.switchpane){
        context.commit('SWITCH_SEARCHPANE', param);
      }
     
    }

  },
  mutations: {
    SWITCH_SEARCHPANE(state, active) {
      if(state.ui.searchPane.active){
        state.ui.searchPane.active = false;
      }else{
        state.ui.searchPane.active = true
      }
     
    },
    ADD_LAYERS(state, layers) {
      if (!state.allLayers.length) {
        layers.map((layer) => {
          state
            .allLayers
            .push({id: layer.id, title: layer.title, tags: layer.tags, selected: false})
        })
      }
    },
    SELECT_LAYER(state, layerId) {
      const layer = state
        .allLayers
        .find(layer => {
          return layer.id === layerId
        })
      layer.selected = true
      const selected = {
        id: layer.id,
        title: layer.title,
        tags: layer.tags,
        selected: true
      }
      state
        .selectedLayers
        .push(selected)
    },
    DESELECT_LAYER(state, layerId) {
      const layer = state
        .allLayers
        .find(layer => {
          return layer.id === layerId
        })
      layer.selected = false
      const selected = state
        .selectedLayers
        .find(layer => {
          return layer.id === layerId
        })
      state
        .selectedLayers
        .splice(state.selectedLayers.indexOf(selected), 1)
    }
  }
})
