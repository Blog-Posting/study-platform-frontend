import { createStore } from 'vuex';
import { member, MemberState } from '@/store/modules/Member';
import { feed, FeedState } from '@/store/modules/Feed';

export interface RootState {
  member: MemberState;
  feed: FeedState;
}

export default createStore({
  modules: { member, feed },
});
