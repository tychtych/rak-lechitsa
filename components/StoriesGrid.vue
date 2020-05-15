<template>
  <div>
    <ul class="stories__container">
      <li v-for="item in storycards" :key="item.id">
        <story-card
          :photo="item.photo"
          :name="item.name"
          :quote="item.quote"
          :link="item.link"
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
  data() {
    return {
      storycards: [
        {
          photo: '/rectangle.jpg',
          name: 'Ник Вуйчич',
          quote: 'Я родился в Москве в 70-м на краю города.',
          link: '',
          id: '1',
        },
        {
          photo: '/rectangle.jpg',
          name: 'Ник Вуйчич',
          quote: 'Я родился в Москве в 70-м на краю города.',
          link: '',
          id: '2',
        },
        {
          photo: '/rectangle.jpg',
          name: 'Ник Вуйчич',
          quote: 'Я родился в Москве в 70-м на краю города.',
          link: '',
          id: '3',
        },
        {
          photo: '/rectangle.jpg',
          name: 'Ник Вуйчич',
          quote: 'Я родился в Москве в 70-м на краю города.',
          link: '',
          id: '4',
        },
        {
          photo: '/rectangle.jpg',
          name: 'Ник Вуйчич',
          quote: 'Я родился в Москве в 70-м на краю города.',
          link: '',
          id: '5',
        },
        {
          photo: '/rectangle.jpg',
          name: 'Ник Вуйчич',
          quote: 'Я родился в Москве в 70-м на краю города.',
          link: '',
          id: '6',
        },
        {
          photo: '/rectangle.jpg',
          name: 'Ник Вуйчич',
          quote: 'Я родился в Москве в 70-м на краю города.',
          link: '',
          id: '7',
        },
        {
          photo: '/rectangle.jpg',
          name: 'Ник Вуйчич',
          quote: 'Я родился в Москве в 70-м на краю города.',
          link: '',
          id: '8',
        },
      ],
    };
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
