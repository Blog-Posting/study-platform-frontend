<template>
  <div class="home">
    <h2>home title</h2>
    <div class="container flex flex-wrap my-12 mx-auto px-4 md:px-12" v-for="feed in feeds" :key="feed.id">
      <FeedCard :member="member" :feeds="feeds" />
    </div>
    <div class="end"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, computed } from 'vue';
import { FeedCard } from '@/components/Cards';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Home',
  components: { FeedCard },
  setup() {
    const feed = reactive({
      list: 9,
    });
    function fetchItems() {
      return new Promise(resolve => {
        setTimeout(() => {
          feed.list += 9;
          resolve('done');
        }, 3000);
      });
    }
    onMounted(() => {
      const options = {
        root: null,
        rootMargin: '0px 0px 30px 0px',
        threshold: 0,
      };

      const io = new IntersectionObserver(async ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          // observer.disconnect();
          try {
            // await fetchItems();
          } catch (error) {
            console.error(error);
          }
          observer.observe(entry.target);
        }
      }, options);

      const el = document.querySelector('.end') as HTMLElement;
      io.observe(el);
    });

    const store = useStore();
    console.log('store', store);
    store.dispatch('feed/fetchFeeds');
    store.dispatch('member/fetchMember');
    const feeds = computed(() => store.state['feed/feeds']);
    const member = computed(() => store.state['member/member']);
    return { ...toRefs(feed), fetchItems, feeds, member };
  },
});
</script>

<style scoped></style>
