<template>
  <div class="News">
    <img :src="newsImage" alt="" />
    <div class="content">
      <h1>{{ newsTitle }}</h1>
      <div class="detail">
        <h4>{{ newsAuthor }}</h4>
        <h4>{{ newsPublishedAt }}</h4>
      </div>
      <div>
        <p>{{ newsArticle }}</p>
      </div>
      <p>Lanjutkan baca ke <a :href="newsUrl">sini</a></p>
      <button @click="goBack">Kembali</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDetail",
  data() {
    return {
      newsImage: "",
      newsTitle: "",
      newsAuthor: "",
      newsPublishedAt: "",
      newsArticle: "",
      newsUrl: "",
    };
  },
  methods: {
    fetchNewsDetail() {
      const newsId = this.$route.params.id;
      const selectedNews = this.$store.state.news.list.find((news) => news.title === newsId);
      if (selectedNews) {
        this.newsImage = selectedNews.urlToImage;
        this.newsTitle = selectedNews.title;
        this.newsAuthor = selectedNews.author;
        this.newsPublishedAt = this.formatDate(selectedNews.publishedAt);
        this.newsArticle = selectedNews.content;
        this.newsUrl = selectedNews.url;
      }
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
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.fetchNewsDetail();
  },
};
</script>

<style>
img {
  width: 100%;
  height: 380px;
}
.News {
  padding: 20px;
}
.content h1 {
  text-align: center;
}
.detail {
  display: flex;
  justify-content: space-between;
}
</style>
