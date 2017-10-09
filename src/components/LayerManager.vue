<template>
  <div class="container" v-bind:class="{ active: !searchPaneActive}" @dragover.prevent :draggable="true" @dragstart.stop="handleDragStart" @drop.stop="handleDrop" @dragenter.stop="handleDragEnter" @dragleave.stop="handleDragLeave" @dragend.prevent="handleDragEnd">
    <Layer v-for="(item, index) in layers" v-bind:key="item.id" v-bind:item="item" />

  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Layer from './LayerManager/Layer'

export default {

  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      searchPaneActive: true
    }
  }, components: {
    Layer
  }, methods: {
    _swtich(value) {
      // this.$store.dispatch({ type: 'searchPane', switchpane: true });
    },
    handleDragStart: function(evt, a, b, c) {
      console.log(evt);
    },
    handleDrop: function(evt) {
      console.log(evt);
    },
    handleDragEnter: function(evt) {
      console.log(evt);

    },
    handleDragLeave: function(evt) {
      console.log(evt);
    },
    handleDragEnd: function(evt) {
      console.log(evt);
    }
  }, computed: mapGetters({
    layers: 'getAllLayers'
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background: rebeccapurple;
}



.layers .item {
  background: red
}
</style>
