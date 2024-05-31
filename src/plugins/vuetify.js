// main.js atau vuetify.js
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1976D2", // warna biru untuk tema light
      },
      dark: {
        primary: "#1976D2", // warna biru untuk tema dark
      },
    },
  },
});

export default vuetify;
