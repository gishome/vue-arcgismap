<template>
  <div class="container" v-bind:class="{ close: !searchPaneActive}">
    <div class="menu">
      <el-button @click="_swtich">按钮</el-button>
    </div>
    <div class="search">

    </div>
    <Button>asdas</Button>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, methods: {
    _swtich(value) {
      debugger;
      this.$store.dispatch({ type: 'searchPane', switchpane: true });
    }
  }, computed: mapGetters({
    searchPaneActive: 'getSearchPaneActive'
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  background: black;
  width: 50px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background: red;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  transition: all .3s ease;
}

.container.close {
  position: absolute;
  top: 0;
  left: -250px;
  width: 300px;
  height: 100%;
  background: red;
}
</style>
