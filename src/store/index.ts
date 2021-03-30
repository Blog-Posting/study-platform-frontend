import { createStore } from 'vuex';
import {
  memberModule,
  MemberState,
} from '@/store/modules/Member';
import {
  feedModule,
  FeedState,
} from '@/store/modules/Feed';

export interface RootState {
  member: MemberState;
  feed: FeedState;
}

export default createStore({
  modules: { memberModule, feedModule },
});
