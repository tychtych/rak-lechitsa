<template>
  <div class="quiz">
    <h3 class="quiz__title">{{ title }}</h3>
    <p class="quiz__question">{{ question }}</p>
    <nxt-input
      class="input"
      :placeholder="'Напишите тут'"
      :type="'text'"
      v-model="text"
    />
    <div class="quiz__buttons">
      <back-button @backClick="onPrev"></back-button>
      <my-button class="button" @nextClick="onNext">Далее</my-button>
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/ui/BackButton';
import Button from '@/components/ui/Button';
import PopupInput from '@/components/ui/PopupInput';
import TextArea from '@/components/ui/TextArea';

export default {
  components: {
    'my-button': Button,
    'nxt-input': PopupInput,
    'nxt-textarea': TextArea,
    'back-button': BackButton,
  },
  props: {
    title: {
      required: true,
      default: 'Шаг 0',
      type: String,
    },
    question: {
      required: true,
      type: String,
    },
    onNext: Function,
    onPrev: Function,
  },
  data() {
    return {
      text: '',
    };
  },
};
</script>

<style scoped>
.quiz__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 40px 40px 0;
}
.quiz__question {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin: 40px 40px 0;
}
/* .input {
  margin: 134px 40px 0;
} */
.quiz__buttons {
  margin-top: 210px;
  position: absolute;
  left: 40px;
  bottom: 40px;
}
.button {
  width: 226px;
}
</style>
