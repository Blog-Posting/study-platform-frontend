<template>
  <Header />
  <div class="flex middle mt-auto flex-1">
    <!-- <Nav class="flex" /> -->
    <router-view class="flex-1" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Layouts/Header.vue';
// import Nav from '@/components/Layouts/Nav.vue';

export default defineComponent({
  components: {
    Header,
    // Nav,
  },
  setup() {
    return {};
  },
});
</script>
<style>
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
