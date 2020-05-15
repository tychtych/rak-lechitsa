<template>
  <div>
    <stories />
    <instagram />
    <your-story />
    <statistics-block />
    <about />
  </div>
</template>

<script>
import Stories from '@/components/Stories';
import Instagram from '@/components/Instagram';
import TellYourStory from '@/components/TellYourStory';
import Statistics from '@/components/Statistics';
import Storycard from '@/components/Storycard';
import About from '@/components/About';

export default {
  components: {
    stories: Stories,
    instagram: Instagram,
    'your-story': TellYourStory,
    'story-card': Storycard,
    about: About,
    'statistics-block': Statistics,
  },
};
</script>

<style>
input {
  display: block;
}
</style>
