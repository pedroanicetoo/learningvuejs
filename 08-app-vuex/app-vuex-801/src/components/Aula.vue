<template>
  <div>
    <p>Aula {{totalAulas}}, esse é o usuário: {{user}}, Aulas Completas: {{aulasCompletas}}</p>
    <button @click="handleClick">Modificar Usuário</button>
    <br>
    <b>{{nomeMaiusculo}}</b>
    <br>
    <button @click="COMPLETAR_AULA">Completar Aula</button>
    <br>
    <input type="text" v-model="novoUser">
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      totalAulas: 25,
      nome: "Pedro",
      novoUser: ''
    }
  },
  computed: {
    ...mapState(["user", "aulasCompletas"]),
    nomeMaiusculo() {
      return this.nome.toUpperCase();
    }
  },
  methods: {
    ...mapMutations(['CHANGE_USER', 'COMPLETAR_AULA']),
    handleClick() {
      this.CHANGE_USER({
        user: this.novoUser,
        totalAulas: this.totalAulas
      })
    }
  }
}
</script>
