import Vue from 'vue'
import App from './App'

new Vue({
  //el: '#app', no arquivo de exemplo do Vue esse passo é executado com o método .$mount('#app') do objeto Vue
  render: createElement => createElement(App) 
//render(createElement) { return createElement(App)},; //no arquivo de exemplo do Vue essa função é criada apenas com a arrow function acima 
}).$mount('#app');