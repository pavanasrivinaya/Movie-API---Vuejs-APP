<template>
  <nav>
    <v-app-bar app color="lime accent-2">
      <v-icon left large color="black">mdi-movie </v-icon>

      <v-toolbar-title class="text-uppercase">
        <router-link
          to="/"
          tag="span"
          class="font-weight-black"
          style="cursor: pointer"
        >
          Movie API
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field
        label="Search for Movie Name"
        v-model="searchString"
        class="ml-2 text--black"
        hide-details
      ></v-text-field>
      <v-btn :disabled="!dataAvailable" @click="searchMovie">
        <span class="mr-2"> <v-icon black>mdi-file-find</v-icon></span>
      </v-btn>
      <v-btn flat icon color="red lighten-2" router to="/about">
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    searchMovie() {
      this.$router.push("/search/" + this.searchString);
      this.searchString = "";
    }
  },
  computed: {
    dataAvailable() {
      return this.searchString !== null && this.searchString !== "";
    }
  }
};
</script>
