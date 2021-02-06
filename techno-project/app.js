const vm = new Vue({
  el: "#app",
  data: {
    produtos: []
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})
    },
    maiusculo(valor) {
      return valor.toUpperCase();
    }
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then(r => r.json())
        .then(r => {
          this.produtos = r;
      })
    }
  },
  created() {
    console.log('oi');
    this.fetchProdutos();
  }
}) 