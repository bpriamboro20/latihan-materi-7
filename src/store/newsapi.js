import axios from "axios";

const state = () => ({
  list: [],
});

const mutations = {
  setList(state, news) {
    state.list = news;
  },
};

const actions = {
  async fetchNews({ commit }) {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-05-29&to=2024-05-29&sortBy=popularity&apiKey=0966c9e44fec4b8ca8af9ea043a6547c");
      commit("setList", response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
