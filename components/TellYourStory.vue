<template>
  <section class="your-story" id="tellstory">
    <div class="your-story__container">
      <h2 class="your-story__title">Расскажите свою историю</h2>
      <p class="your-story__text">
        Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.
      </p>
      <ul class="your-story__option">
        <li
          class="your-story__option-link your-story__option-link_first"
          @click="showFirst"
          v-bind:class="{ option__active: firstShown }"
        >
          1-й вариант
        </li>
        <li
          class="your-story__option-link your-story__option-link_second"
          @click="showSecond"
          v-bind:class="{ option__active: secondShown }"
        >
          2-й вариант
        </li>
      </ul>
      <div class="your-story__description">
        <p class="your-story__write-in" v-if="firstShown">
          Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю
          после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
          испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
        </p>
        <p class="your-story__leave-contact" v-if="secondShown">
          Оставить контакт (почту или номер телефона) и мы свяжемся с вами,
          зададим вопросы, уточним детали вашей истории.
        </p>
      </div>
      <purple-button
        @btnClick="popupHandler"
        v-if="firstShown"
        :text="'Заполнить форму'"
      >
      </purple-button>
      <purple-button v-if="secondShown" :text="'Оставить контакт'">
      </purple-button>
    </div>
    <overlay v-if="popupShown" @overlayClick="popupHandler"></overlay>
    <popup v-if="popupShown" @closePopup="popupHandler" class="popup">
      <quiz
        :title="data[currentQuestion].title"
        :question="data[currentQuestion].question"
        :onNext="nextQuestion"
        :onPrev="prevQuestion"
      />
    </popup>
  </section>
</template>

<script>
import PurpleButton from '@/components/ui/PurpleButton';
import PopUp from '@/components/PopUp';
import Overlay from '@/components/ui/Overlay';
import Quiz from '@/components/Quiz';
export default {
  components: {
    'purple-button': PurpleButton,
    popup: PopUp,
    overlay: Overlay,
    quiz: Quiz,
  },

  data() {
    return {
      popupShown: false,
      firstShown: true,
      secondShown: false,
      currentQuestion: 1,
      data: {
        1: {
          title: 'Шаг 1 из 12',
          question: '1',
        },
        2: {
          title: 'Шаг 2 из 12',
          question: '2',
        },
      },
    };
  },
  methods: {
    popupHandler() {
      this.popupShown = !this.popupShown;
    },
    nextQuestion() {
      console.log('event');
      this.currentQuestion = this.currentQuestion + 1;
    },
    prevQuestion() {
      this.currentQuestion = this.currentQuestion - 1;
    },
    showFirst() {
      this.firstShown = true;
      this.secondShown = false;
    },
    showSecond() {
      this.firstShown = false;
      this.secondShown = true;
    },
  },
};
</script>

<style scoped>
.your-story {
  max-width: 100%;
  padding: 100px 60px 100px 60px;
  background-color: #f7f7f7;
  margin-bottom: 100px;
}

.your-story__container {
  margin: 0 auto;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.your-story__info {
  max-width: 340px;
}

.your-story__title {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  grid-row-start: 1;
  grid-column-start: 1;
}

.your-story__text {
  max-width: 340px;
  grid-row-start: 2;
  grid-column-start: 1;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.your-story__description {
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  grid-row-start: 2;
  grid-column-start: 2;
}

.your-story__write-in {
  max-width: 640px;
  grid-row-start: 2;
  grid-column-start: 3;
}

.your-story__leave-contact {
  max-width: 640px;
}

.your-story__prompt {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  grid-row-start: 2;
  grid-column-start: 2;
}

.your-story__form {
  width: 280px;
  height: 52px;
  padding: 0;
  border: none;
  font: inherit;
  color: #fff;
  background-color: #613a93;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  grid-row-start: 3;
  grid-column-start: 2;
  align-self: end;
}

.your-story__form:hover {
  transition: 0.2s;
  opacity: 0.9;
}

.your-story__option {
  list-style: none;
  padding: 0;
  margin: 0;
  grid-row-start: 2;
  grid-column-start: 1;
  justify-self: end;
  padding-right: 40px;
  text-align: right;
}

.your-story__option-link {
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #a2a2a2;
  text-decoration: none;
  cursor: pointer;
}

.your-story__option-link_first {
  padding-bottom: 10px;
}

.your-story__option-link:hover {
  color: #000;
}

.option__active {
  color: #000;
}

.your-story__prompt {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}
.popup {
  min-height: 600px;
}
</style>
