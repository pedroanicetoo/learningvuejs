<template>
  <div id="app">
    <modal-principal>
      <template v-slot:header="{ logo }">
        {{logo}}
        <p>Esse é o header</p>
      </template>
      <template v-slot:default="{ user }">
        {{user.nome}}
        <p>Esse é um teste</p>
        <button>Comprar</button>
      </template>
      <template v-slot:footer>
        <p>Esse é o footer</p>
      </template>
    </modal-principal>
  </div>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal.vue";
export default {
  name: "App",
  components: {
    ModalPrincipal
  }
};
</script>

<style>
</style>
