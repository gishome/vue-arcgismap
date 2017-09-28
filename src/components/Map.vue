<template>
  <div class="mapframe">

    <div id='viewDiv' class="map">
    </div>

  </div>
</template>

<script>
import './Map/dojoConfig'
import * as esriLoader from 'esri-loader'
import { createMap } from './Map/createMap'
import { mapGetters } from 'vuex'
import SearchPane from '@/components/SearchPane'

export default {
  name: 'map',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    SearchPane
  },
  methods: {
    updateTitle(value) {
    }
  },
  computed: mapGetters({
    selectedLayers: 'getSelectedLayers',
    routerQuery: 'getRouterQuery',
    test: 'getTest'
  }),
  mounted() {
    if (!esriLoader.isLoaded()) {
      esriLoader.bootstrap((err) => {
        if (err) {
          console.error(err)
        }
        createMap(esriLoader, this.$router, 'myMap')
      }, {
          url: 'https://js.arcgis.com/4.4/'
        })
    } else {
      createMap(esriLoader, this.$router, 'myMap')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://js.arcgis.com/4.4/esri/themes/light/main.css');
.mapframe {
  width: 100%;
  height: 100%;
  margin: 0;
  border: 0;
}

.map {
  margin: 0;
  border: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.map-widget-container {
  margin: 0;
  border: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
