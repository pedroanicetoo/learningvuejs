<template>
  <div id="app">
    {{$store.state.acao}}
    <Aluno/>
    <Curso/>
  </div>
</template>

<script>
import Aluno from '@/components/Aluno.vue'
import Curso from '@/components/Curso.vue'

export default {
  name: 'App',
  components: { Aluno, Curso },
  created() {
    this.$store.dispatch("puxarAcao");
  }
}
</script>
