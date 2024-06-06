<template>
  <v-app>
    <v-main>
      <v-card class="mx-auto overflow-hidden" height="auto">
        <v-app-bar app elevate-on-scroll color="primary" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-toolbar-title>News App</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-app-bar>
        <router-view></router-view>

        <v-navigation-drawer v-model="drawer" app class="drawer-adjustment" color="primary" dark absolute temporary>
          <v-list nav dense>
            <v-list-item-group v-model="group">
              <v-list-item v-for="author in authors" :key="author" class="white--text">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ author }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      drawer: false,
      group: null,
      authors: [],
    };
  },
  computed: {
    ...mapState("news", ["list"]),
  },
  watch: {
    list: {
      immediate: true,
      handler(newsList) {
        this.authors = newsList.map((news) => news.author).filter((author) => !!author);
      },
    },
  },
};
</script>

<style>
.drawer-adjustment {
  z-index: 101; /* Adjust z-index if needed */
}
</style>
