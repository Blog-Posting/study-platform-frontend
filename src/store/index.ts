import Vuex from 'vuex';

import MemberModule from '@/store/member';

const store = new Vuex.Store({
  state: {},
  modules: {
    MemberModule,
  },
});

export default store;
