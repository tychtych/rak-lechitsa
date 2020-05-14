<template>
  <section class="your-story">
    <div class="your-story__container">
      <h2 class="your-story__title">Расскажите свою историю</h2>
      <p class="your-story__description">
        Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.
      </p>
      <ul class="your-story__option">
        <li>
          <a
            href="#"
            class="your-story__option-link your-story__option-link_first"
            >1-й вариант</a
          >
        </li>
        <li>
          <a
            href="#"
            class="your-story__option-link your-story__option-link_second"
            >2-й вариант</a
          >
        </li>
      </ul>
      <p class="your-story__prompt">
        Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю
        после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
        испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
      </p>
      <button class="your-story__form">Заполнить форму</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.your-story {
  max-width: 1440px;
  margin: 0 auto;
  background-color: #f7f7f7;
  margin-bottom: 100px;
}

.your-story__container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 100px 0 100px 0;
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

.your-story__description {
  max-width: 340px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  grid-row-start: 2;
  grid-column-start: 1;
}

.your-story__write-in {
  max-width: 640px;
  grid-row-start: 2;
  grid-column-start: 3;
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

.your-story__option-link_first {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000;
  text-decoration: none;
}

.your-story__option-link_second {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #a2a2a2;
  text-decoration: none;
}

.your-story__prompt {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}
</style>
