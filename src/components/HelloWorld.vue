<template>
  <div>
    <p>
      This a component, {{ $store.state.firstName }}. It also accesses the state!
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
