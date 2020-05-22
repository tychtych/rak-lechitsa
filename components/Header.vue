<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__logo">
        Проект Благотворительного Фонда Константина Хабенского
      </h1>
      <nav class="header__menu">
        <div class="header__nav"></div>
        <div class="header__nav"></div>
        <div class="header__nav"></div>
        <a class="header__link header__link_underline" name="main" href="#main"
          >Главная</a
        >
        <a class="header__link" href="#stories">Истории</a>
        <a class="header__link" href="#tellstory">Рассказать историю</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  align-items: center;
  background-color: #ffffff;
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__logo {
  margin-top: 18px;
  margin-bottom: 18px;
  width: 340px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}
.header__nav {
  background-color: #000000;
  width: 32px;
  height: 3px;
  margin-bottom: 9px;
}
.header__nav:last-child {
  margin-bottom: 0;
}
.header__link {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: #000000;
}
.header__link:last-child {
  margin-right: 0;
}
.header__link:hover {
  color: #a2a2a2;
}
.header__link_underline {
  text-decoration: underline;
}
@media screen and (max-width: 1280px) {
  .header__container {
    margin: 0 50px;
  }
}
@media screen and (min-width: 1281px) {
  .header__container {
    margin: 0 60px;
  }
}
@media screen and (min-width: 1280px) {
  .header__link {
    margin-right: 40px;
  }
}
@media screen and (min-width: 1024px) {
  .header__link {
    margin-right: 30px;
  }
  .header__nav {
    display: none;
  }
}
@media screen and (max-width: 1023px) {
  .header__menu {
    height: 28px;
  }
  .header__link {
    display: none;
  }
  .header__nav {
    display: flex;
    flex-direction: column;
  }
}
</style>
