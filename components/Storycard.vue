<template>
  <a class="story-card" :href="link" target="_blank">
    <img :src="photo" class="story-card__photo" />
    <p class="story-card__name">{{ name }}</p>
    <p class="story-card__quote">{{ quote }}</p>
  </a>
</template>

<script>
export default {
  props: {
    photo: String,
    name: String,
    quote: String,
    link: String,
  },
};
</script>

<style scoped>
.story-card {
  color: #000;
  text-decoration: none;
  width: 300px;
}

.story-card__name {
  padding-top: 20px;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
}

.story-card__quote {
  padding-top: 14px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666;
}

.story-card__photo {
  max-width: 300px;
  max-height: 300px;
}
</style>
