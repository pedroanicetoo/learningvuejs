<template>
  <div>
    <h1>👍 Compre ou Venda 👎</h1>
    <ProdutosBuscar/>
    <ProdutosLista/>
  </div>
</template>

<script>

import ProdutosBuscar from "@/components/ProdutosBuscar.vue";
import ProdutosLista from "@/components/ProdutosLista.vue";

export default {
  name: 'home',
  components: {
    ProdutosBuscar,
    ProdutosLista
  }
}
</script>

<style scoped>
  h1 {
    color: #87f;
    margin-top: 40px;
    font-size: 2rem;
    text-align: center;
  }
</style>
