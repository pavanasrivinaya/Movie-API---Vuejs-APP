import Vue from "vue";
import VueRouter from "vue-router";
import Movie from "@/components/Movie";
import LatestMovie from "@/components/LatestMovie";
import SearchMovie from "@/components/SearchMovie";
import About from "@/views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LatestMovie",
    component: LatestMovie
  },
  {
    path: "/movie/:id",
    name: "Movie",
    props: true,
    component: Movie
  },
  {
    path: "/search/:name",
    name: "SearchMovie",
    props: true,
    component: SearchMovie
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
