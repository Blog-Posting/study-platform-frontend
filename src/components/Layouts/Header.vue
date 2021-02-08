<template>
  <header class="header flex justify-between items-center h-20 p-4 bg-gray-800 text-white">
    <div class="header__logo">logo</div>
    <div class="header__util">
      <button>Search</button>
      <button>Login</button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
