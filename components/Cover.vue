<template>
  <div class="cover">
    <h1 class="cover__heading">#РАКЛЕЧИТСЯ</h1>
    <img src="@/static/Polygon 3.png" class="cover__polygon" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cover {
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  height: 100px;
  background-color: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.cover__heading {
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  color: #ffffff;
}
.cover__polygon {
  bottom: 40px;
  position: absolute;
  width: 36px;
  height: 12px;
}
.cover__polygon:hover {
  opacity: 0.8;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .cover {
    height: 780px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .cover {
    height: 540px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1280px) {
  .cover {
    height: 620px;
  }
}
@media screen and (min-width: 1281px) {
  .cover {
    height: 689px;
  }
}
@media screen and (min-width: 1440px) {
  .cover__heading {
    font-size: 92px;
    line-height: 111px;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1439px) {
  .cover__heading {
    font-size: 78px;
    line-height: 94px;
  }
}
@media screen and (max-width: 1023px) {
  .cover__heading {
    font-size: 64px;
    line-height: 77px;
  }
}
</style>
