<template>
  <article class="w-full md:w-1/2 xl:w-1/3 flex flex-col p-3">
    <div class="overflow-hidden rounded-lg shadow-lg my-2.5">
      <a href="#">
        <img alt="Placeholder" class="block h-auto w-full" :src="img" />
      </a>

      <header class="leading-tight p-2 md:p-4">
        <h1 class="text-lg">
          <a class="no-underline hover:underline text-black" href="#">
            {{ title }}
          </a>
        </h1>
      </header>

      <section>
        <p class="text-grey-darker text-sm">
          {{ description }}
        </p>
      </section>

      <hr class="my-2" />

      <footer class="flex items-center justify-between leading-none p-1 md:p-2">
        <a class="flex items-center no-underline hover:underline text-black" href="#">
          <img alt="Placeholder" class="inline-block h-6 w-6 rounded-full ring-2 ring-white" :src="userProfile" />
          <p class="ml-2 text-sm">{{ name }}</p>
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
import { defineComponent, computed } from 'vue';
import { mapActions, useStore } from 'vuex';

export default defineComponent({
  name: 'FeedCard',
  props: {
    title: {
      type: String,
      default: 'Quartz Scheduler Admin 고도화 - 파일럿 프로젝트',
    },
    description: {
      type: String,
      default: 'Dynamic Multi DataSource 구현 경험을 공유합니다.',
    },
    tags: {
      type: Array,
      default: () => ['experience', 'Springboot', 'JPA', 'Vue.js'],
    },
    userProfile: {
      type: String,
      default: 'https://avatars.githubusercontent.com/u/53366407?s=460&v=4',
    },
    name: {
      type: String,
      default: 'zumInternet',
    },
    img: {
      type: String,
      default:
        'https://zuminternet.github.io/images/portal/post/2021-01-25-ZUM-Pilot-advanced_quartz_scheduler_admin/02-quartz_job_scheduler.PNG',
    },
  },
  setup() {
    const store = useStore();
    const getFeeds = computed(() => store.getters['feed/getFeeds']);

    return {
      getFeeds,
    };
  },
  methods: {
    ...mapActions('feeds', ['fetchFeeds']),
  },
});
</script>

<style scoped></style>
