<template>
  <div id="app">
    <h2>Livros:</h2>
    <ul>
      <li v-for="livro in $store.state.livros" :key="livro.nome">
        {{livro.nome}}
      </li>
    </ul>
    <br>
    <h2>Livros Livdos:</h2>
    <ul>
      <li v-for="livro in livrosLidos(false)" :key="livro.nome">
        {{livro.nome}}
      </li>
    </ul>
    {{$store.state.acao}}
    <Aluno/>
    <Curso/>
  </div>
</template>

<script>
import Aluno from '@/components/Aluno.vue'
import Curso from '@/components/Curso.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: { Aluno, Curso },
  created() {
    this.$store.dispatch("puxarAcao");
  },
  computed: {
    ...mapGetters(["livrosLidos"])
  }
}
</script>
