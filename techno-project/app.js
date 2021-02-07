const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
    carrinho: [],
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})
    },
    maiusculo(valor) {
      return valor.toUpperCase();
    }
  },
  computed: {
    carrinhoTotal() {
      let total = 0;
      if(this.carrinho.length) {
        this.carrinho.forEach(item => {
          total += item.preco;
        })
      }
      return total;
    }
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then(r => r.json())
        .then(r => {
          this.produtos = r;
      })
    },

    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then(r => r.json())
        .then(r => {
          this.produto = r;
      })
    },

    abrirModal(id) {
      this.fetchProduto(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },

    fecharModal({ target, currentTarget }) {
      if(target === currentTarget) this.produto = false;
    },

    adicionarItem() {
      this.produto.estoque--;
      const {id, nome, preco} = this.produto
      console.log(id,nome,preco);
      this.carrinho.push({id, nome, preco});
    },

    removerItem(index) {
      this.carrinho.splice(0, 1);
    },

    checarLocalStorage() {
      if(window.localStorage.carrinho) {
        this.carrinho = JSON.parse(window.localStorage.carrinho);
      }
    }
  },
  watch: {
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    }
  },
  created() {
    this.fetchProdutos();
    this.checarLocalStorage();
  }
}) 