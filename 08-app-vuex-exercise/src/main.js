import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

// Crie 3 componentes : Aluno, Curso e Aulas
// Aluno e Curso devem estar em App.vue
// Aulas deve ser um componente filho de Curso

// Aulas terá uma lista
// {
//  nome: "HTML E CSS"
//  duracao: 15
// },
// {
//  nome: "Javascript"
//  duracao: 30
// }
// {
//  nome: "UX design"
//  duracao: 20
// }
// Crie um botão para cada aula, onde será possível clicar em completar. As aulas completas deverão ser colocadas em um array dentro de Store.

//Utilize mutações para modificar a Array;
//A array de aulas completas deverá ser mostrado no componente Aluno

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
