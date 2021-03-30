import { Module, ActionContext } from 'vuex';
import { RootState } from '@/store';
import { MutationType } from '@/store/modules/mutationType';
import axios from 'axios';
import { Feed } from '@/type/blog/Feed';

export interface FeedState {
  feeds: Array<Feed>;
}

export const feedModule: Module<FeedState, RootState> = {
  namespaced: true,
  state: {
    feeds: [],
  },

  mutations: {
    [MutationType.SET_MEMBER](state, feeds) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      state.feeds = feeds.map(feed => new Feed(feed.id, feed.title, feed.link, feed.description, feed.pubData));
    },
  },

  getters: {
    getFeeds(state) {
      return state.feeds;
    },
  },

  actions: {
    async fetchFeeds({ commit }) {
      const http = axios.create();
      const res = await http.get('/feeds');
      commit(MutationType.SET_FEEDS, res.data);

      return res.data;
    },
  },
};
