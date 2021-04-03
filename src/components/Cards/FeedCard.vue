<template>
  <article class="w-full md:w-1/2 xl:w-1/3 flex flex-col p-3">
    <div class="overflow-hidden rounded-lg shadow-lg my-2.5">
      <a href="#">
        <img alt="Placeholder" class="block h-auto w-full" :src="feed.img" />
      </a>

      <header class="leading-tight p-2 md:p-4">
        <h1 class="text-lg">
          <a class="no-underline hover:underline text-black" href="#">
            {{ feed.title }}
          </a>
        </h1>
      </header>

      <section>
        <p class="text-grey-darker text-sm">
          {{ feed.description }}
        </p>
      </section>

      <hr class="my-2" />

      <footer class="flex items-center justify-between leading-none p-1 md:p-2">
        <a class="flex items-center no-underline hover:underline text-black" href="#">
          <img
            alt="Placeholder"
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            :src="feed.userPictureUrl"
          />
          <p class="ml-2 text-sm">{{ feed.userName }}</p>
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24px" height="24px">
          <path
            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0
            010 4z"
          />
        </svg>
      </footer>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Feed } from '@/type/blog/Feed';

export default defineComponent({
  name: 'FeedCard',
  props: {
    feed: {
      type: Feed,
      required: true,
    },
  },
  setup() {
    return {};
  },
  methods: {},
});
</script>

<style scoped></style>
