<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h2>{{simbolo}}</h2>
      <div>{{acao}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["simbolo"],
  data() {
    return {
      loading: true,
      acao: null
    };
  },
  methods: {
    puxarAcao() {
      this.loading = true;
      this.acao = null;
      fetch(
        `https://sandbox.iexapis.com/stable/stock/${this.simbolo}/quote?token=Tpk_13c3e0d9c3be456a9fda4725f18bdc2c`
      )
        .then(r => r.json())
        .then(r => {
          this.acao = r;
          this.loading = false;
        });
    }
  },
  created() {
    this.puxarAcao(this.simbolo);
  },
  watch: {
    $route: "puxarAcao"
  }
  // beforeRouteUpdate(to, from, next) {
  //   this.puxarAcao(to.params.simbolo);
  //   next();
  // }
};
</script>

<style>
</style>