<template>
  <el-menu class="el-menu" mode="horizontal">
    <el-menu-item index="1">홈</el-menu-item>
    <el-menu-item v-if="!member" index="2" @click="signIn">로그인</el-menu-item>
    <el-menu-item v-else index="2" @click="signOut">로그아웃</el-menu-item>
  </el-menu>
  <div class="line"></div>
  'member' : {{ member }}
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Header',
  setup() {
    const store = useStore();
    function signIn() {
      console.log('signIn');
      store.dispatch('member/login');
    }
    function signOut() {
      console.log('signOut');
      store.dispatch('member/logout');
    }
    const member = computed(() => store.state.member.member);
    return { signIn, signOut, member };
  },
});
</script>

<style scoped>
.el-menu .el-menu-item:last-child {
  float: right;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border: none;
  color: #909399;
}
</style>
