import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Contato from '../views/Contato.vue';
import Cursos from '../views/Cursos.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contato",
      name: "contato",
      component: Contato
    },
    {
      path: "/cursos",
      name: "cursos",
      component: Cursos
    }
  ]
})
