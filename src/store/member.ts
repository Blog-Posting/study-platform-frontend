import {
  Module,
  Mutation,
  Action,
  VuexModule,
} from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
class Member extends VuexModule {
}

export default Member;
