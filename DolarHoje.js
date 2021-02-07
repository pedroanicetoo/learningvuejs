export default {
  name: "DolarHoje",
  data() {
    return {
      CurrencyToday: 0
    }
  },
  template: `<p>Dolar Hoje em Real: {{CurrencyToday}}</p>`,
  methods: {
    puxarDolar() {
      fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then(r => r.json())
        .then(r => {
          this.CurrencyToday = r.rates.BRL;
          console.log(r);
      })
    }
  },
  created() {
    this.puxarDolar();
  }
}