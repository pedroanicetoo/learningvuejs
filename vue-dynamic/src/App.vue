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
import ServicosEmpresa from './components/ServicosEmpresa.vue';
import FormularioContato from './components/FormularioContato.vue';


export default {
  name: "App",
  components: {
    SobreEmpresa,
    ServicosEmpresa,
    FormularioContato
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