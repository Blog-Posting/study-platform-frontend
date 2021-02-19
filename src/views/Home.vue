<template>
  <div class="home">
    <h2>home title</h2>
    <div class="content">
      <FeedCard />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { FeedCard } from '@/components/Cards';

export default defineComponent({
  name: 'Home',
  components: { FeedCard },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
