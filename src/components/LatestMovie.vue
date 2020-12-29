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

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in wholeResponse" :key="index" mb-2>
        <v-card
          class="mx-auto"
          max-width="400"
          @click="singleMovie(item.imdbID)"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="item.Poster"
            aspect-ratio="1"
          ></v-img>
          <v-card-title>{{ item.Title }}</v-card-title>

          <v-card-subtitle class="pb-0">
            Year: {{ item.Year }}
          </v-card-subtitle>
          <v-card-text class="text--primary">
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
  data() {
    return {
      wholeResponse: [],
      loading: true
    };
  },
  mounted() {
    movieApi
      .fetchMovieCollection("Tom and jerry")
      .then(response => {
        this.wholeResponse = response.Search;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
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
