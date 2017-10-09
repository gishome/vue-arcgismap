// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
// const Chm = require('./core/Chm')
import Chm from './core/Chm'

// const Chm = require('./core/Chm');
Vue.use(Element);

Vue.config.productionTip = false

/* eslint-disable no-new */
var vue = new Vue({el: '#app', store, router, template: '<App/>', components: {
    App
  }});
Chm.setVue(vue);
window.Chm = Chm;