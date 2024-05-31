import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import newsapi from "./newsapi";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["news"],
    }),
  ],
  modules: {
    news: newsapi,
  },
});
