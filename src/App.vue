<template>
  <div id="app">
    <p>
      My full name is {{ name }} and my favorite color is
      {{ $store.state.favoriteColor }}. My profession is
      {{ $store.state.profession }}.
    </p>

    <hr>

    <about-me />

    <hr>

    <hello-world />

    <hr>
    <!-- Demonstrating the getters with parameters -->
    <h2>Fiction Books</h2>
    <ul>
      <li v-for="book in $store.getters.fiction" :key="book.title">
        {{ book.title }}
      </li>
    </ul>
    <h2>Non-Fiction Books</h2>
    <ul>
      <li v-for="book in $store.getters.fiction" :key="book.title">
        {{ book.title }}
      </li>
    </ul>
    <h2>Short Books</h2>
    <ul>
      <li v-for="book in $store.getters.booksByMaxPages(150)" :key="book.title">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AboutMe from "./components/AboutMe.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld,
    AboutMe
  },
  methods: {
    ...mapMutations(["setBooks"]),
    ...mapActions(["loadBooks"])
  },
  created() {
    // Now accessible directly without the $store object
    this.loadBooks()
  },
  computed: {
    ...mapState(["firstName", "lastName"]),
    ...mapGetters(["name"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
