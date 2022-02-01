<template>
  <div>
    <p>Aula {{totalAulas}}, esse é o usuário: {{user}}, Aulas Completas: {{aulasCompletas}}</p>
    <button @click="mostrarConsole">Mostrar no Console</button>
    <br>
    <b>{{nomeMaiusculo}}</b>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  data() {
    return {
      totalAulas: 25,
      nome: "Pedro"
    }
  },
  computed: {
    ...mapState(["user", "aulasCompletas"]),
    nomeMaiusculo() {
      return this.nome.toUpperCase();
    }
  },
  methods: {
    mostrarConsole() {
      console.log(this.user)
    }
  }
}
</script>
