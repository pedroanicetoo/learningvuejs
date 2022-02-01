import Vue from "vue"
import Vuex from "vuex"
import acao from '@/store/acao.js'

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    acao
  },
  state: {
    aulasCompletas: [],
    acao: null,
    livros: [
      {
        nome: "O senhor dos Anéis",
        lido: true
      },
      {
        nome: "Harry Potter",
        lido: true
      },
      {
        nome: "As crônicas de Gelo e Fogo",
        lido: false
      }
    ]
  },
  getters: {
    livrosLidos: state => lido => state.livros.filter(livro => livro.lido === lido)
  },
  mutations: {
    COMPLETAR_AULA(state, payload) {
      if(!state.aulasCompletas.includes(payload)){
        state.aulasCompletas.push(payload)
      }
      console.log(state.aulasCompletas) // Debugg
    }
  },
  actions: {
    completarAula(context, payload) {
      context.commit("COMPLETAR_AULA", payload)
    }
  }
})
