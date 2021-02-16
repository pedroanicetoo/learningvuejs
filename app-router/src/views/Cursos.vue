<template>
  <div>
    <h1>Curso ativo: {{curso}}</h1>
    <router-link :to="{name: 'curso', params: { curso: 'javascript' }}">Javascript</router-link>
    <router-link :to="{name: 'curso', params: { curso: 'html' }}">HTML</router-link>
    <router-link :to="{name: 'curso', params: { curso: 'css' }}">CSS</router-link>

    <transition mode="out-in">
      <router-view :key="curso"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  created() {
    console.log("esse componente foi criado");
  },
  beforeRouteUpdate(to, from, next) {
    next();
  }
};
</script>

<style>
.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>