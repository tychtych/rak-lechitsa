<template>
  <section class="story">
    <div class="story__intro">
      <img alt class="story__photo" />
      <div class="story__description">
        <h2 class="story__quote"></h2>
        <div class="story__details">
          <p class="story__share"></p>
          <p class="story__date"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// TODO analog of API, simulation of returning data fetch story, fetch story by ID
//
import StoriesGrid from '@/components/StoriesGrid';
import Storycard from '@/components/Storycard';
export default {
  components: {
    'stories-grid': StoriesGrid,
    'story-card': Storycard,
  },
  computed: {},
  async fetch({ store, params }) {
    await store.dispatch('stories/fetchStoryWithId');
  },
};
</script>

<style scoped>
.story__intro {
  min-height: 450px;
  display: flex;
}
</style>
