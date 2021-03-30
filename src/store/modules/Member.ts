import { Module, ActionContext } from 'vuex';
import { RootState } from '@/store';
import { MutationType } from '@/store/modules/mutationType';
import axios from 'axios';

class Member {
  email: string;

  name: string;

  pictureUrl: string;

  constructor(email: string, name: string, pictureUrl: string) {
    this.email = email;
    this.name = name;
    this.pictureUrl = pictureUrl;
  }
}

export interface MemberState {
  member: Member | null;
}

export const memberModule: Module<MemberState, RootState> = {
  namespaced: true,
  state: {
    member: null,
  },

  mutations: {
    [MutationType.SET_MEMBER](state, { email, name, pictureUrl }) {
      state.member = new Member(email, name, pictureUrl);
    },
  },

  getters: {
    getMember(state) {
      return state.member;
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
