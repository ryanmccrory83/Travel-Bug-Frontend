// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App';
import BootstrapVue from 'bootstrap-vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Main from './views/Main';
import Nav from './components/Nav';
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyASCy4vaXQzI49aGBeT6E1if9kGl9Dp2gA',
    libraries: 'places'
  },
})

Vue.use(VueAxios, axios)

Vue.use(BootstrapVue);

Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

// Vue.component('b-modal', bModal);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Main,
  Nav,
  components: { App },
  template: '<App/>',
});
