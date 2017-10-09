<template>
  <div v-bind:class="{ active: mouseover}" class="layer" @mouseover="mouseOver($event,true)">

    <div class="title">title:{{item.title||'--'}}</div>
    <div class="opacity">opacity:{{item.opacity}}</div>
    <div class="drag">拖动</div>
    <div class="display">显示</div>
  </div>
</template>

<script>
export default {
  props: [
    'item'
  ],
  methods: {
    mouseOver: function(evt, param) {
      this.mouseover = param;
      evt.stopPropagation();
    }
  },

  name: 'layer',
  data() {
    return {
      mouseover: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layer {
  background: red
}

.layer:hover {
  background: green !important;
}
</style>
