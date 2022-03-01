import Vue from "vue"

export function serialize(obj) {
  let queryString = ""
  for(let key in obj) {
    queryString += `&${key}=${obj[key]}`
  }
  return queryString
}

Vue.filter("numeroPreco", valor => {
  valor = Number(valor);
  if(!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  } else {
    return "";
  }
})
