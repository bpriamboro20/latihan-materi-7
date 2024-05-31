import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import Vuetify from "vuetify"; // Impor Vuetify
import "vuetify/dist/vuetify.min.css"; // Impor CSS Vuetify
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.use(Vuetify); // Gunakan Vuetify

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
