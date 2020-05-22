<template>
  <div>
    <ul class="stories__container">
      <li v-for="item in storycards" :key="item.id" @click="goToStory(item.id)">
        <story-card
          :photo="item.ImageUrl"
          :name="item.author"
          :quote="item.title"
          :id="item.id"
          :date="item.date"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Storycard from '@/components/Storycard';
export default {
  components: {
    'story-card': Storycard,
  },
  methods: {
    goToStory(id) {
      this.$router.push(`/stories/${id}`);
    },
  },
  computed: {
    storycards() {
      return this.$store.getters['stories/getStories'];
    },
  },
  beforeMount() {
    this.$store.dispatch('stories/fetchStories');
  },
};
</script>

<style scoped>
.stories__container {
  display: grid;
  width: 1320px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 70px;
  padding-bottom: 70px;
  list-style: none;
  padding-left: 0;
}
</style>
