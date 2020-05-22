<template>
  <button class="purple-button" @click="$emit('btnClick')">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
.purple-button {
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

.purple-button:hover {
  transition: 0.2s;
  opacity: 0.9;
}
</style>
