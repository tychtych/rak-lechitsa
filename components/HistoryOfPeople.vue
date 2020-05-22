<template>
  <section class="histories-of-people">
    <div class="histories-of-people__container">
      <div class="histories-of-people__texts">
        <h2 class="histories-of-people__heading">
          Истории людей, победивших рак, но не свои привычки
        </h2>
        <p class="histories-of-people__paragraph">
          Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
          страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди
          с их историями.
        </p>
        <div class="histories-of-people__buttons">
          <button class="histories-of-people__button_previous"></button>
          <button class="histories-of-people__button_next"></button>
        </div>
      </div>
      <div class="histories-of-people__video-container">
        <div class="histories-of-people__video-play">
          <img class="histories-of-people__video" src="@/static/Snimok.png" />
          <button class="histories-of-people__play-button"></button>
        </div>
        <p class="histories-of-people__quoute">
          Все видео вы можете найте на нашем
          <a
            class="histories-of-people__link"
            href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            target="_blank"
            >YouTube канале</a
          >.
        </p>
      </div>
    </div>
    <div class="histories-of-people__it-is-not-treated">
      <h1 class="histories-of-people__text">
        И В ОТЛИЧИЕ ОТ РАКА,
        <span class="histories-of-people__it-is-not-treated_span"
          >#ЭТОНЕЛЕЧИТСЯ</span
        >
      </h1>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.histories-of-people {
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.histories-of-people__container {
  display: flex;
  justify-content: space-between;
}
.histories-of-people__it-is-not-treated {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 86px;
  background-color: #613a93;
  text-align: center;
  font-family: Inter;
  color: #ffffff;
}
.histories-of-people__text {
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 46px;
}
.histories-of-people__buttons {
  display: flex;
  margin-top: 150px;
  width: 80px;
  height: 40px;
  background-color: none;
}
.histories-of-people__button_previous {
  border: none;
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  background-repeat: no-repeat;
  background-image: url('../static/Polygon7.png');
  background-position: center;
}
.histories-of-people__button_next {
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-image: url('../static/Polygon8.png');
  background-position: center;
}
.histories-of-people__video-container {
  position: relative;
}
.histories-of-people__it-is-not-treated_span {
  font-style: normal;
  font-weight: 800;
  font-size: 44px;
  line-height: 46px;
}
.histories-of-people__texts {
  display: flex;
  flex-direction: column;
}
.histories-of-people__heading {
  width: 413px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 32px;
  margin-top: 10px;
}
.histories-of-people__paragraph {
  width: 350px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
.histories-of-people__video {
  width: 867px;
  height: 450px;
  grid-row-start: 1;
  grid-column-start: 1;
}
.histories-of-people__video-play {
  display: grid;
}
.histories-of-people__play-button {
  width: 90px;
  height: 90px;
  padding: 0;
  border: none;
  background-color: transparent;
  background-image: url('../static/Subtract.png');
  cursor: pointer;
  grid-row-start: 1;
  grid-column-start: 1;
  z-index: 1;
  justify-self: center;
  align-self: center;
}
.histories-of-people__play-button:hover {
  background-image: url('../static/SubtractPurple.png');
  transition: 0.2s;
}
.histories-of-people__quoute {
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}
.histories-of-people__link {
  color: #666666;
}
@media screen and (min-width: 1440px) {
  .histories-of-people {
    margin: 100px auto;
  }
  .histories-of-people__container {
    margin-right: 60px;
    margin-left: 60px;
    margin-bottom: 74px;
  }
  .histories-of-people__it-is-not-treated {
    margin-right: 60px;
    margin-left: 60px;
  }
}
@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .histories-of-people {
    margin: 90px auto;
  }
  .histories-of-people__container {
    margin-bottom: 64px;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .histories-of-people__container {
    margin-bottom: 54px;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1439px) {
  .histories-of-people__container {
    margin-right: 50px;
    margin-left: 50px;
  }
  .histories-of-people__it-is-not-treated {
    margin-right: 50px;
    margin-left: 50px;
  }
}
@media screen and (max-width: 1279px) {
  .histories-of-people {
    margin: 80px auto;
  }
}
@media screen and (max-width: 1023px) {
  .histories-of-people__container {
    margin-right: 40px;
    margin-left: 40px;
    margin-bottom: 44px;
  }
  .histories-of-people__it-is-not-treated {
    margin-right: 40px;
    margin-left: 40px;
  }
}
</style>
