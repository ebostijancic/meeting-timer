import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import PersonService from './services/PersonService';
//import FirebaseService from './services/FirebaseService';

Vue.config.productionTip = false;

const vue = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

const personService: PersonService = new PersonService();

personService.createDefaultPeople();
//FirebaseService.init();

