<template>
  <button class="button" @click="$emit('backClick')">Назад</button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #666666;
  max-width: 48px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  outline: none;
}
</style>
