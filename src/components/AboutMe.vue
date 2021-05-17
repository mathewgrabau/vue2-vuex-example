<template>
  <div>
    <h1>About Me</h1>
    <p>
      My name is {{ $store.state.name }} and I have
      {{ $store.state.dogCount }} dogs.
    </p>

    <!-- <p>
            <input type="text" v-model="newName">
            <button @click="setName"></button>
        </p> -->

    <p>
      <button @click="addDog">Add dog</button>
      <button @click="removeDog" :disabled="$store.state.dogCount === 0">Remove dog</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addDog() {
      this.$store.commit("addDog");
    },
    removeDog() {
      this.$store.commit("removeDog");
    },
  },
};
</script>