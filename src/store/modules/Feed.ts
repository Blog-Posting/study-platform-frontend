import { Module, ActionContext } from 'vuex';
import { RootState } from '@/store';

export interface FeedState {
  email: string;
}

export const Feed: Module<FeedState, RootState> = {
  namespaced: true,
  state: () => ({
    email: 'ksy90101@gmail.com',
  }),

  mutations: {},

  getters: {
    getEmail(state, getters, rootState) {
      return state.email;
    },
  },

  actions: {},
};
