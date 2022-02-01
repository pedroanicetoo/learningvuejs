<template>
  <div>
    Aluno
    <h2>Aulas Completas:</h2>
     <div v-if="aulasCompletas.length > 0">
       <li v-for="aulaCompleta in aulasCompletas" :key="aulaCompleta.nome">
        {{aulaCompleta.nome}}
       </li>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Aluno',
    computed: {
      aulasCompletas() {
        return this.$store.state.aulasCompletas;
      }
  }
}
</script>
