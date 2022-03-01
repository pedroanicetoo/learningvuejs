import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Produto from '../views/Produto.vue'
import Login from '../views/Login.vue'
import Usuario from '../views/usuario/Usuario.vue'
import UsuarioProdutos from '../views/usuario/UsuarioProdutos.vue'
import UsuarioVendas from '../views/usuario/UsuarioVendas.vue'
import UsuarioCompras from '../views/usuario/UsuarioCompras.vue'
import UsuarioEditar from '../views/usuario/UsuarioEditar.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: "/produtos/:id",
      name: "produto",
      component: Produto,
      props: true
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/usuario",
      name: "usuario",
      component: Usuario,
      children: [
        {
          path: "",
          name: "usuario",
          component: UsuarioProdutos
        },
        {
          path: "compras",
          name: "compras",
          component: UsuarioCompras
        },
        {
          path: "vendas",
          name: "vendas",
          component: UsuarioVendas
        },
        {
          path: "editar",
          name: "usuario-editar",
          component: UsuarioEditar
        }
      ]
    }
  ],
  scrollBehavior() {
    return window.scrollTo({ top:0, behavior: "smooth" });
  }
})

export default router
