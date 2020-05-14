<template>
  <section class="stories">
    <h2 class="stories__title">Истории неизлечимых привычек</h2>
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
    <button class="stories__more">Больше статей</button>
  </section>
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
.stories {
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

.stories__more {
  width: 100%;
  height: 82px;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: #fbfbfb;
  cursor: pointer;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
}

.stories__more:hover {
  transition: 0.2s;
  background-color: #f8f8f8;
}

.stories__cont {
  list-style: none;
  padding: 0;
  display: contents;
}
</style>
