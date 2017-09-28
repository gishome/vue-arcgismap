<template>
  <div class="container">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" :router=true
  
     mode="horizontal" @select="handleSelect">
      <el-menu-item index="/">我的地图</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="statistic">
        <a>订单管理</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      activeIndex: '/'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
