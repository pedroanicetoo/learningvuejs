<template>
  <div>
    <p>Faça o download dos arquivos</p>
    <button>Download</button>
  </div>
</template>

<script>
export default {
  name: "AulaDownload",
  destroyed() {
    console.log('Componente Download destruido')
  },
  created() {
    console.log("Componente Download Criado")  
  }
};
</script>

<style>
</style>