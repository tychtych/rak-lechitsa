<template>
  <div>
    <ul class="stories__container">
      <li
        v-for="item in paginatedData"
        :key="item.id"
        @click="goToStory(item.id)"
      >
        <story-card
          :imageUrl="defineImage(item)"
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
  props: {
    itemsOnPage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      baseUrl: process.env.baseUrl,
      pageNumber: 0,
    };
  },
  methods: {
    goToStory(id) {
      this.$router.push(`/stories/${id}`);
    },
    defineImage(item) {
      if (!item.ImageUrl || item.ImageUrl.length === 0) {
        return '@/assets/no_image.png';
      }
      const formats = item.ImageUrl[0].formats;
      if (!formats.small || !formats.small.url) {
        return '@/assets/no_image.png';
      }
      return new URL(formats.small.url, this.baseUrl).toString();
    },
  },
  computed: {
    storyCards() {
      let getter = this.$store.getters['stories/getStories'];
      console.log(getter);
      return getter;
    },
    paginatedData() {
      const start = this.pageNumber * this.itemsOnPage;
      const end = start + this.itemsOnPage;
      console.log(this.storyCards);
      if (!this.storyCards) {
        return [];
      }
      console.log(start);
      console.log(end);
      let slice = this.storyCards.slice(start, end);
      console.log(slice);
      return slice;
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
