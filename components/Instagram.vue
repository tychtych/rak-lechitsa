<template>
  <section class="instagram">
    <div class="purple-strip">
      <p class="purple-strip__title">
        рассказывайте ваши истории в Инстаграм
        <span class="hashtag">#этонелечится</span>
      </p>
    </div>
    <div class="instagram__container">
      <div class="instagram__info">
        <h2 class="instagram__title">Инстаграм</h2>
        <p class="instagram__description">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
      </div>
      <div class="instagram__grid">
        <a
          class="instagram__photo"
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
          ><img src="/insta_photo.jpg"
        /></a>
        <a
          class="instagram__photo"
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
          ><img src="/insta_photo.jpg"
        /></a>
        <a
          class="instagram__photo"
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
          ><img src="/insta_photo.jpg"
        /></a>
        <a
          class="instagram__photo"
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
          ><img src="/insta_photo.jpg"
        /></a>
        <a
          class="instagram__photo"
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
          ><img src="/insta_photo.jpg"
        /></a>
        <a
          class="instagram__photo"
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
          ><img src="/insta_photo.jpg"
        /></a>
        <a
          class="instagram__photo"
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
          ><img src="/insta_photo.jpg"
        /></a>
        <a
          class="instagram__photo"
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
          ><img src="/insta_photo.jpg"
        /></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.instagram {
  max-width: 1320px;
  margin: 0 auto;
  padding-bottom: 100px;
}

.purple-strip {
  max-width: 1320px;
  background-color: #613a93;
  text-align: center;
  text-transform: uppercase;
  padding-top: 20px;
  padding-bottom: 20px;
}

.purple-strip__title {
  max-width: 750px;
  display: inline-block;
  font-weight: 400;
  font-size: 30px;
  line-height: 46px;
  text-transform: uppercase;
  color: #fff;
}

.hashtag {
  font-weight: 800;
  font-size: 44px;
}

.instagram__container {
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  width: 100%;
}

.instagram__info {
  max-width: 340px;
}

.instagram__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  border-bottom: 2px solid #000;
  width: fit-content;
}

.instagram__description {
  padding-top: 32px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.instagram__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
}
</style>
