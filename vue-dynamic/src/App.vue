<template>
  <div id="app">
    <button @click="opcao = 'SobreEmpresa'">Sobre</button>
    <button @click="opcao = 'ServicosEmpresa'">Serviços</button>
    <button @click="opcao = 'FormularioContato'">Formulário</button>
    <keep-alive>  
      <component :is="opcao"></component>
    </keep-alive>
  </div>
</template>

<script>
import SobreEmpresa from './components/SobreEmpresa.vue';

export default {
  name: "App",
  components: {
    SobreEmpresa,
    FormularioContato: function() {
      return import("./components/FormularioContato.vue");
    }
  },
  data() {
    return {
      opcao:""
    }
  }
};
</script>

<style>
</style>