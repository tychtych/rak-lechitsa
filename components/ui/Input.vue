<template>
  <div class="input__container">
    <input class="input__search" type="text" required />
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input__container {
  max-width: 1440px;
  min-height: 48px;
  display: flex;
  margin-bottom: 60px;
}
.input__search {
  outline: none;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  min-height: 52px;
  padding: 0 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2;
  flex-basis: 1074px;
}
</style>
