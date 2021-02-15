<template>
  <div id="app">
    <div>
      <button @click="ativo = !ativo">Ativar default class</button>
      <transition appear name="fade">
        <h1 v-if="ativo">Serviços</h1>
      </transition>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <button @click="ativo2 = !ativo2">Ativar customize class</button>
      <transition name="fade" enter-active-class="animar" @before-enter="beforeEnter" @enter="enter">
        <h1 v-if="ativo2">Serviços2</h1>
      </transition>

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      ativo: true,
      ativo2: false
    };
  },
  methods: {
    beforeEnter(element) {
      console.log(element);
      console.log("Elemento entrando");
    },
    enter(element) {
      console.log(element);
      console.log("Elemento entrou");
    }
  }  
}
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s; 
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.animar {
  transition: opacity 2s; 
}

</style>
