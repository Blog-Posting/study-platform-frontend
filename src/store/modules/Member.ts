import { Module } from 'vuex';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';
import { MutationType } from '@/store/modules/mutationType';
import { Member } from '@/type/member/Member';
import axios from 'axios';

export interface MemberState {
  member: Member | null;
}

const defaultConfig = {
  timeout: 30000,
  headers: {
    'content-type': 'application/json',
  },
  baseURL: '/api',
};

const http = axios.create(defaultConfig);

export const member: Module<MemberState, RootState> = {
  namespaced: true,
  state: {
    member: null,
  },

  mutations: {
    [MutationType.SET_MEMBER](state, { email, name, pictureUrl }) {
      state.member = new Member(email, name, pictureUrl);
    },
  },

  actions: {
    async fetchMember({ commit }) {
      const res = await http.get('/users');
      commit(MutationType.SET_MEMBER, res.data);

      return res.data;
    },
    async login({ commit }) {
      // dummy
      console.log('store login');
      commit(MutationType.SET_MEMBER, {
        email: 'email',
        name: 'name',
        pictureUrl: 'pictureUrl',
      });
      // const res = await http.get('/login/oauth/github');
      // commit(MutationType.SET_MEMBER, res.data);

      // return res.data;
    },
    async logout({ commit }) {
      // dummy
      console.log('store logout');
      // commit(MutationType.SET_MEMBER, {
      //   email: 'email',
      //   name: 'name',
      //   pictureUrl: 'pictureUrl',
      // });
      // const res = await http.get('/logout');
      // commit(MutationType.SET_MEMBER, res.data);
      // return res.data;
    },
  },
};
