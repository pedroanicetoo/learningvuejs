<template>
  <div id="app">
    <button @click="componentAtivo = 'AulaDescricao'" >Descricao</button>
    <button @click="componentAtivo = 'AulaDownload'">Download</button>
    <keep-alive>
      <component :is="componentAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import AulaDescricao from "./components/AulaDescricao.vue";
import AulaDownload from "./components/AulaDownload.vue";

export default {
  name: "App",
  components: {
    AulaDescricao,
    AulaDownload
  },
  data() {
    return {
      componentAtivo: "AulaDownload"
    }
  }
};
</script>

<style>
</style>
