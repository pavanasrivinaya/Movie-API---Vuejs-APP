<template>
  <v-container v-if="loading" class="progress">
    <div class="text-xs-right">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="lime accent-2"
        right
      >
      </v-progress-circular>
    </div>
  </v-container>

  <v-container v-else-if="noData">
    <div class="text-xs-center">
      <h2>No Movie in API with {{ this.name }}</h2>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in movieResponse" :key="index" mb-2>
        <v-card
          class="mx-auto"
          max-width="400"
          @click="singleMovie(item.imdbID)"
        >
          <v-img :src="item.Poster"></v-img>
          <v-card-title>{{ item.Title }}</v-card-title>
          <v-card-text class="text--primary">
            <div>Year: {{ item.Year }}</div>
            <div>Type: {{ item.Type }}</div>
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn text color="orange" @click="singleMovie(item.imdbID)"
              >Details</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from "@/services/MovieApi";
export default {
  props: ["name"],
  data() {
    return {
      movieResponse: [],
      loading: true,
      noData: false
    };
  },
  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    },
    fetchResult(value) {
      movieApi
        .fetchMovieCollection(value)
        .then(response => {
          if (response.Response === "True") {
            this.movieResponse = response.Search;
            this.loading = false;
            this.noData = false;
          } else {
            this.noData = true;
            this.loading = false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.fetchResult(this.name);
  },
  watch: {
    name(value) {
      this.fetchResult(value);
    }
  }
};
</script>

<style scoped>
.progress {
  margin-top: 50px;
  margin-left: 550px;
}
</style>
