<template>
  <div id="app">
    <p>
      My name is {{ $store.state.name }} and my favorite color is {{ $store.state.favoriteColor }}. My profession is {{ $store.state.profession }}.
    </p>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
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
