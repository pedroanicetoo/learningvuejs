<template>
  <div>
    <li v-for="item in items" :key="item.nome">
      Aula: {{item.nome}}
      Duracao: {{item.duracao}}
      <button @click="completarAula(item)">Completar Aula</button>
    </li>
  </div>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      items: [
      {
        nome: "HTML E CSS",
        duracao: 15
      },
      {
        nome: "Javascript",
        duracao: 30
      },
      {
        nome: "UX design",
        duracao: 20
      }
    ]
    }
  },
  methods: {
    ...mapMutations(['COMPLETAR_AULA']),
    completarAula(item) {
      this.COMPLETAR_AULA(item)
    }
  }
}
</script>
