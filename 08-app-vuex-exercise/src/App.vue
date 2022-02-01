<template>
  <div id="app">
    <Aluno/>
    <Curso/>
  </div>
</template>

<script>
import Aluno from '@/components/Aluno.vue'
import Curso from '@/components/Curso.vue'

export default {
  name: 'App',
  components: { Aluno, Curso }
}
</script>
