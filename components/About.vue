<template>
  <div class="about">
    <h2 class="about__title">#РАКЛЕЧИТСЯ</h2>
    <p class="about__subtitle">О проекте</p>
    <div class="about__container">
      <p class="about__founder">
        Этот проект был создан благотворительным&nbsp;фондом
        Константина&nbsp;Хабенского.
      </p>
      <div class="about__description">
        <div class="about__switch">
          <p
            class="about__cancer"
            @click="showCancer"
            v-bind:class="{ about__active: cancerShown }"
          >
            Рак&nbsp;Лечится
          </p>
          <p
            class="about__story"
            @click="showStory"
            v-bind:class="{ about__active: storyShown }"
          >
            Фонд&nbsp;Хабенского
          </p>
        </div>
        <div class="about__texts">
          <p class="about__text" v-if="cancerShown">
            Есть вещи, которые не лечатся. Особенности характера, страстные
            увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
            приобрели в детстве. Список можно продолжать до бесконечности, но
            одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
            и лучшее доказательство — люди с их неизлечимыми особенностями,
            которые сумели победить рак.
          </p>
          <p class="about__text" v-if="cancerShown">
            Рак лечится — проект Благотворительного Фонда Константина Хабенского
            и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение
            людей к раку и заставить каждого поверить: онкологическое
            заболевание — это не приговор.
          </p>
          <p class="about__fond" v-if="storyShown">
            Благотворительный Фонд Константина Хабенского с 2008 года помогает
            детям с онкологическими и другими тяжелыми заболеваниями головного
            мозга. Фонд не только поддерживает семью заболевшего ребенка в самый
            сложный момент, оплачивая обследования, лечение и медицинские
            препараты, но и в целом меняет систему оказания помощи детям с
            опухолями мозга в России.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showCancer() {
      this.cancerShown = true;
      this.storyShown = false;
    },
    showStory() {
      this.cancerShown = false;
      this.storyShown = true;
    },
  },
  data() {
    return {
      cancerShown: true,
      storyShown: false,
    };
  },
};
</script>

<style scoped>
.about {
  background-color: #613a93;
  color: #ffffff;
  padding: 80px 60px 60px 80px;
  box-sizing: border-box;
  min-height: 650px;
}
.about__title {
  margin: 0 auto 0;
  max-width: 720px;
  text-align: center;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
}
.about__subtitle {
  margin: 70px 0 0;

  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.about__container {
  margin: 32px 0;
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
}
.about__founder {
  max-width: 340px;
  color: #dedede;
}
.about__description {
  flex-basis: 830px;
  display: flex;
  justify-content: space-between;
}
.about__switch {
  max-width: 154px;
  display: flex;
  flex-direction: column;
}
.about__cancer {
  text-align: right;
  margin-bottom: 10px;
  color: #c9c9c9;
  font-weight: 500;
}
.about__story {
  color: #c9c9c9;
}
.about__texts {
  display: flex;
  flex-direction: column;
  max-width: 640px;
}
.about__text {
  margin: 0 0 20px;
  color: #dedede;
}
.about__fond {
  color: #dedede;
}
.about__active {
  color: #ffffff;
}
.about__cancer:hover {
  color: #ffffff;
  cursor: pointer;
}
.about__story:hover {
  color: #ffffff;
  cursor: pointer;
}
@media screen and (max-width: 1281px) {
  .about {
    padding: 80px 50px 50px 90px;
  }
  .about__title {
    font-size: 58px;
    line-height: 70px;
  }
  .about__subtitle {
    font-size: 28px;
    line-height: 32px;
  }
  .about__founder {
    max-width: 260px;
    font-size: 16px;
    line-height: 20px;
  }
  .about__description {
    flex-basis: 740px;
  }
  .about__texts {
    max-width: 570px;
  }
}
@media screen and (max-width: 1025px) {
  .about {
    padding: 80px 50px 50px 80px;
  }
  .about__title {
    font-size: 52px;
    line-height: 63px;
  }
  .about__subtitle {
    font-size: 24px;
    line-height: 28px;
  }
  .about__container {
    font-size: 15px;
    line-height: 19px;
  }
  .about__founder {
    font-size: 13px;
    line-height: 16px;
  }
  .about__switch {
    max-width: 130px;
  }
  .about__description {
    flex-basis: 600px;
  }
  .about__texts {
    max-width: 437px;
  }
}
@media screen and (max-width: 769px) {
  .about {
    padding: 80px 194px 80px;
  }
  .about__title {
    display: none;
  }
  .about__subtitle {
    margin: 0 auto 26px;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }
  .about__container {
    margin: 0 auto 0;
    display: inline;
    /* flex-direction: column; */
    align-items: center;
    flex-basis: 400px;
    font-size: 15px;
    line-height: 19px;
    max-width: 380px;
  }
  .about__founder {
    margin-bottom: 80px;
    max-width: 380px;
    align-self: baseline;
    font-size: 13px;
    line-height: 16px;
  }
  .about__switch {
    max-width: 130px;
    flex-direction: row;
    margin-bottom: 30px;
  }
  .about__description {
    flex-direction: column;
    flex-basis: none;
    max-height: 320px;
  }
  .about__texts {
    max-width: 437px;
  }
  .about__cancer {
    margin-bottom: 0;
    margin-right: 30px;
  }
}
@media screen and (max-width: 321px) {
  .about {
    padding: 50px 15px 50px;
  }
  .about__subtitle {
    text-align: left;
    margin: 0 auto 26px;
    font-size: 18px;
    line-height: 21px;
  }
  .about__container {
    max-width: 290px;
    margin-left: auto;
    margin-right: auto;
  }
  .about__founder {
    margin-bottom: 40px;
    font-size: 13px;
    line-height: 16px;
  }
  .about__switch {
    margin-bottom: 20px;
    font-size: 13px;
    line-height: 19px;
  }
}
</style>
