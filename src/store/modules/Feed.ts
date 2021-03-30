import { Module, ActionContext } from 'vuex';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';
import { MutationType } from '@/store/modules/mutationType';
import axios from 'axios';
import { Feed } from '@/type/blog/Feed';

const defaultConfig = {
  timeout: 30000,
  headers: {
    'content-type': 'application/json',
  },
  baseURL: '/api',
};

const http = axios.create(defaultConfig);

export interface FeedState {
  feeds: Array<Feed>;
}

export const feed: Module<FeedState, RootState> = {
  namespaced: true,
  state: {
    feeds: [],
  },

  mutations: {
    [MutationType.SET_MEMBER](state, feeds) {
      // eslint-disable-next-line no-shadow,@typescript-eslint/ban-ts-ignore
      // @ts-ignore
      // eslint-disable-next-line no-shadow
      state.feeds = feeds.map(feed => new Feed(feed.id, feed.title, feed.link, feed.description, feed.pubData));
    },
  },

  actions: {
    async fetchFeeds({ commit }) {
      const res = await http.get('/feeds');
      commit(MutationType.SET_FEEDS, res.data);

      return res.data;
    },
  },
};
