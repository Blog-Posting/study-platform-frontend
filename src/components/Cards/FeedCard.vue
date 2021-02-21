<template>
  <div>
    <img src="" alt="" />
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div>{{ tags }}</div>
    <div>
      util
      <span>{{ name }}</span>
      <span>...?</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FeedCard',
  props: {
    title: {
      type: String,
      default: 'dummy title',
    },
    description: {
      type: String,
      default: 'dummy description',
    },
    tags: {
      type: Array,
      default: () => ['hi', 'hello'],
    },
    name: {
      type: String,
      default: 'dummy name',
    },
    // title: {
    //   type: String,
    //   default: ''
    // },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
