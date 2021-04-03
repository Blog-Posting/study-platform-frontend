<template>
  <div class="home">
    <h2>home title</h2>
    <div class="container flex flex-wrap my-12 mx-auto px-4 md:px-12" v-for="feed in feeds" :key="feed.id">
      <FeedCard :member="member" :feed="feed" />
    </div>
    <div class="end"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, computed } from 'vue';
import { FeedCard } from '@/components/Cards';
import { mapActions, useStore } from 'vuex';

export default defineComponent({
  name: 'Home',
  components: { FeedCard },
  async created() {
    try {
      await this.fetchFeeds();
      await this.fetchMember();
    } catch (e) {
      console.log(e);
    }
  },
  setup() {
    const feed = reactive({
      list: 9,
      // computedList: computed(() => {
      //   return
      // })
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
          console.log('fetchItems()', fetchItems());
          try {
            await fetchItems();
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
    const feeds = computed(() => store.state['feed/feeds']);
    const member = computed(() => store.state['member/member']);

    return { ...toRefs(feed), fetchItems, feeds, member };
  },
  methods: {
    ...mapActions('feed', ['fetchFeeds']),
    ...mapActions('member', ['fetchMember']),
  },
});
</script>

<style scoped></style>
