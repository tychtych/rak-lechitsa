<template>
  <div class="container">
    <h2 class="stories__title">Истории неизлечимых привычек</h2>
    <input-search>
      <button-search>Поиск</button-search>
    </input-search>
    <ul class="grid">
      <li class="grid__item" v-for="story in storiesToRender">
        <storycard
          :imageUrl="defineImage(story)"
          :name="story.author"
          :quote="story.title"
          :id="story.id"
        />
      </li>
    </ul>
    <pagination
      :total-items="storycards.length"
      :items-per-page="itemsPerPage"
      @onPageChanged="changeStartIndex"
    />
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Pagination from '@/components/Pagination';
import Storycard from '~/components/Storycard';

export default {
  components: {
    Storycard,
    'button-search': Button,
    'input-search': Input,
    pagination: Pagination,
    story: Storycard,
  },
  data() {
    return {
      baseUrl: process.env.baseUrl,
      pageNumber: 0,
      itemsPerPage: 16,
      startIndex: 1,
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
    changeStartIndex(index) {
      this.startIndex = (index - 1) * this.itemsPerPage;
    },
  },
  computed: {
    storycards() {
      let getter = this.$store.getters['stories/getStories'];
      console.log(getter);
      return getter;
    },
    paginatedData() {
      const start = this.pageNumber * this.itemsOnPage;
      const end = start + this.itemsOnPage;
      return this.storycards.slice(start, end);
    },
    storiesToRender() {
      const { stories } = this.$store.state;
      return stories.stories.filter(
        (item, idx) =>
          idx >= this.startIndex && idx < this.startIndex + this.itemsPerPage
      );
    },
  },
  beforeMount() {
    this.$store.dispatch('stories/fetchStories');
  },
};
</script>

<style scoped>
.container {
  max-width: 1320px;
  margin: 0 auto;
  padding-bottom: 100px;
  padding-top: 100px;
}

.stories__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 413px;
  padding-bottom: 70px;
}
.grid {
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
.grid__item {
}
</style>
