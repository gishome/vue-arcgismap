<template>
  <div class="mapframe">

    <div id='viewDiv' v-loading.body="!loaded" class="map">
    </div>
    <LayerManager/>

  </div>
</template>

<script>
import './Map/dojoConfig'
// import * as esriLoader from 'esri-loader'
import Chm from '@/core/Chm'
import { createMap } from './Map/createMap'
import { mapGetters } from 'vuex'
import SearchPane from '@/components/SearchPane'
import LayerManager from '@/components/LayerManager'

export default {
  name: 'map',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    SearchPane,
    LayerManager
  },
  methods: {
    updateTitle(value) {
    }
  },
  computed: mapGetters({
    loaded: 'checkMapLoaded',
  }),
  mounted() {

    Chm.createMap({
      container: 'viewDiv'
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://js.arcgis.com/4.5/esri/css/main.css');
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
