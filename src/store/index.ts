import Vuex from 'vuex';

import Member from '@/store/member';

const store = new Vuex.Store({
  state: {},
  modules: {
    Member,
  },
});

export default store;
