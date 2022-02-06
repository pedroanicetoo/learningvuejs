<template>
<div>
  <form>
    <input name="busca" type="text" id="busca" v-model="busca">
    <input type="submit" id="lupa" @click.prevent="buscarProdutos">
    {{busca}}
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      busca: ''
    }
  },
  methods: {
    buscarProdutos() {
      this.$router.push({query: {q: this.busca}});
    }
  }

}
</script>

<style>

</style>
