import { createStore } from 'vuex';
import {
  memberModule,
  MemberState,
} from '@/store/modules/Member';
import { Feed, FeedState } from '@/store/modules/Feed';

export interface RootState {
  Member: MemberState;
  Feed: FeedState;
}

export default createStore({
  modules: { memberModule, Feed },
});
