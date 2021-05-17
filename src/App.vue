<template>
  <div id="app">
    <p>
      My full name is {{ $store.getters.name }} and my favorite color is
      {{ $store.state.favoriteColor }}. My profession is
      {{ $store.state.profession }}.
    </p>

    <hello-world />
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

export default {
  name: "App",
  components: {
    HelloWorld,
  },
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
