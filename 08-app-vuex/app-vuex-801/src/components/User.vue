<template>
  <div>
    <p>User {{aulasCompletas}}</p>
  </div>
</template>

<script>

export default {
  name: 'User',
  computed: {
    aulasCompletas() {
      return this.$store.state.aulasCompletas;
    }
  }
}
</script>
