<template>
  <div>
    <ul v-if="paginasTotal > 1">
      <router-link :to="{query: query(1)}">&#60;</router-link>
      <li v-for="pagina in paginas" :key="pagina">
        <router-link :to="{query: query(pagina)}">{{pagina}}</router-link>
      </li>
      <router-link :to="{query: query(paginasTotal)}">&gt;</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name:"ProdutosPaginar",
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina
      };
    }
  },
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
    produtosTotal: {
      type: Number,
      default: 1,
    }
  },
  computed: {
    paginas() {
      const current = Number(this.$route.query._page);
      const range = 5;
      const offset = Math.ceil(range / 2);
      const total = this.paginasTotal;
      const pagesArray = [];

      for (let i =0; i <= total; i++) {
        pagesArray.push(i);
      }

      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);
      return pagesArray;
    },
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      return (total !== Infinity) ? Math.ceil(total) : 0;
    }
  }
}
</script>

<style scoped>

  ul {
    grid-column: 1 / -1;
  }

  li {
    display: inline-block;
  }

  li a {
    padding: 2px 8px;
    border-radius: 2px;
    margin: 4px;
  }

  li a.router-link-exact-active,
  li a:hover {
    background: #87f;
    color: #fff;
  }

</style>
