<template>
  <div id="app">

    <div class="route-container">
      <router-view></router-view>
    </div>
    <Navigation size="small" />
  </div>
</template>

<script>

import Navigation from '@/components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  },
}
</script>

<style>
@import url('https://unpkg.com/element-ui/lib/theme-default/index.css');
body,
html,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  border: 0;
}

.route-container {
  /* position: fixed;
    width: 100%;
    z-index: 1; */
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
