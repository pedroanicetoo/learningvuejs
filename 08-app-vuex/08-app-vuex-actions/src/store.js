import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    aulasCompletas: [],
    acao: null
  },
  mutations: {
    COMPLETAR_AULA(state, payload) {
      if(!state.aulasCompletas.includes(payload)){
        state.aulasCompletas.push(payload)
      }
      console.log(state.aulasCompletas) // Debugg
    },
    UPDATE_ACAO(state, payload) {
      state.acao = payload
    }
  },
  actions: {
    completarAula(context, payload) {
      context.commit("COMPLETAR_AULA", payload)
    },
    puxarAcao(context) {
      fetch("https://api.origamid.dev/stock/aapl/quote")
      .then(r => r.json())
      .then(respostaJSON => {
        context.commit("UPDATE_ACAO", respostaJSON)
        context.dispatch("completarAula", {
          nome: "Apple"
        })
      })
    }
  }
})
