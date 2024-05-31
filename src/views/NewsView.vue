<template>
  <ul>
    <li v-for="news in listNews" :key="news.title" class="mt-5" @click="goToNewsDetail(news.title)">
      <v-card class="mx-auto pb-3" max-width="600">
        <v-img class="white--text align-end" height="250px" :src="news.urlToImage"> </v-img>

        <v-card-title class="pb-0">{{ news.title }}</v-card-title>

        <v-card-text class="text--primary">
          <div>{{ news.content }}</div>
        </v-card-text>

        <v-card-actions class="d-flex justify-space-between">
          <v-btn rounded color="black white--text">TechCrunch</v-btn>
          <div>
            <v-btn class="mx-2" fab small color="white">
              <v-icon color="info"> mdi-twitter </v-icon>
            </v-btn>
            <v-btn class="mx-2" fab small color="white">
              <v-icon color="primary"> mdi-facebook </v-icon>
            </v-btn>
            <v-btn class="mx-2" fab small color="white">
              <v-icon color="#E53935"> mdi-gmail </v-icon>
            </v-btn>
            <v-btn class="mx-2" fab small color="white">
              <v-icon color="#0D47A1"> mdi-linkedin </v-icon>
            </v-btn>
            <v-btn class="mx-2" fab small color="white">
              <v-icon color="success"> mdi-whatsapp </v-icon>
            </v-btn>
          </div>
          <v-btn color="primary"><a :href="news.url" target="_blank" style="color: white">ReadMore</a></v-btn>
        </v-card-actions>
      </v-card>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NewsView",
  methods: {
    fetchNews() {
      this.$store.dispatch("news/fetchNews");
    },
    formatDate(dateString) {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      return new Date(dateString).toLocaleDateString("id-ID", options);
    },
    goToNewsDetail(newsTitle) {
      const newsId = this.listNews.find((news) => news.title === newsTitle).title;
      this.$router.push({ name: "newsDetail", params: { id: newsId } });
    },
  },
  computed: {
    listNews() {
      return this.$store.state.news.list;
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>

<style>
ul {
  list-style: none;
}
a {
  text-decoration-line: none;
}
li {
  cursor: pointer;
}
</style>
