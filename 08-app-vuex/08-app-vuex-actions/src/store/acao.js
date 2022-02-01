export default {
  namespaced: true,
  state: {
    empresa: "apple",
    acao: null
  },
  mutations: {
    UPDATE_ACAO(state, payload) {
      state.acao = payload
    }
  },
  actions: {
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
}
