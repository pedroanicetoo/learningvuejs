import DolarHoje from "./DolarHoje.js";

export default {
  name: "AcaoHoje",
  components: {
    DolarHoje
  },
  data() {
    return {
      ValorMercado: 0
    }
  },
  template: `
    <div>
    <p>Valor da Apple: {{ValorMercado}}</p>
      <dolar-hoje></dolar-hoje>
    </div>
  `,
  methods: {
    puxarAcao() {
      fetch("https://sandbox.iexapis.com/stable/stock/AAPL/quote?token=Tpk_13c3e0d9c3be456a9fda4725f18bdc2c")
      .then(r => r.json())
      .then(r => {
        this.ValorMercado = r.marketCap;
      })
    }
  },
  created() {
    this.puxarAcao()
  }
}