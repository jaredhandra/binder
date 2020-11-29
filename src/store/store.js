import Vue from 'vue';
import Vuex from 'vuex';

import members from './modules/members';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    members
  }
});
