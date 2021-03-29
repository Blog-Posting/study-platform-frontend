import {
  Module,
  GetterTree,
  MutationTree,
  ActionTree,
} from 'vuex';

export class Member {
  public id: number = 0;
  public githubId: string = '';
  public email: string = '';
  public name: string = '';
  public pictureUrl: string = '';
}

const getters: GetterTree<Member, any> = {};

const mutations: MutationTree<Member> = {};

const actions: ActionTree<Member, any> = {};

const MemberModule: Module<Member, any> = {
  namespaced: true,
  state: new Member(),
  getters,
  mutations,
  actions,
};

export default MemberModule;
