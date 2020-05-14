<template>
  <div>
    <stories />
    <instagram />
    <your-story />
  </div>
</template>

<script>
import Stories from '@/components/Stories';
import Instagram from '@/components/Instagram';
import TellYourStory from '@/components/TellYourStory';
import Storycard from '@/components/Storycard';
export default {
  components: {
    stories: Stories,
    instagram: Instagram,
    'your-story': TellYourStory,
    'story-card': Storycard,
  },
};
</script>

<style>
input {
  display: block;
}
</style>
