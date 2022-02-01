<template>
  <div>
    <h1>Curso</h1>
    <Aulas/>
    <button @click="verAulas">Ver Aulas</button>
  </div>
</template>

<script>

import Aulas from '@/components/Aulas.vue'

export default {
  name: 'Curso',
  components: { Aulas },
  methods: {
    verAulas() {
      return console.log(this.$store.state.aulasCompletas)
    }
  }
}
</script>
