import Amplify from 'aws-amplify';
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';


Amplify.configure(aws_exports);

Vue.config.productionTip = false;

Vue.use(VueGoodTablePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
