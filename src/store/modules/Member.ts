import { Module, ActionContext } from 'vuex';
import { RootState } from '@/store';
import { MutationType } from '@/store/modules/mutationType.ts';
import axios from 'axios';

class Member {
  email: string;

  name: string;

  pictureUrl: string;

  constructor(
    email: string,
    name: string,
    pictureUrl: string,
  ) {
    this.email = email;
    this.name = name;
    this.pictureUrl = pictureUrl;
  }
}

export interface MemberState {
  email: string;
  name: string;
  pictureUrl: string;
}

export const memberModule: Module<
  MemberState,
  RootState
> = {
  namespaced: true,
  state: {
    email: '',
    name: '',
    pictureUrl: '',
  },

  mutations: {
    [MutationType.SET_MEMBER](
      state,
      { email, name, pictureUrl },
    ) {
      state.email = email;
      state.name = name;
      state.pictureUrl = pictureUrl;
    },
  },

  getters: {
    getMember(state) {
      const { email, name, pictureUrl } = state;
      return new Member(email, name, pictureUrl);
    },
  },

  actions: {
    async fetchMember({ commit }) {
      const http = axios.create();
      const res = await http.get('/users');
      commit(MutationType.SET_MEMBER, res.data);

      return res.data;
    },
  },
};
