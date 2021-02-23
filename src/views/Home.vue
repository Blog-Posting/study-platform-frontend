<template>
  <div class="home">
    <h2>home title</h2>
    <div class="container flex flex-wrap my-12 mx-auto px-4 md:px-12">
      <FeedCard v-for="n in 9" :key="n" />
      <!-- <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div class="my-2 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3">
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div class="my-2 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3">
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div class="my-2 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3">
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
      </div> -->
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
