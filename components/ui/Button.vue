<template>
  <button class="button" @click="$emit('nextClick')">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  flex-shrink: 0;
  padding: 0;
  background: #613a93;
  min-height: 52px;
  border: none;
  outline: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  color: #fff;
  transition: all 0.25s;
  max-width: 226px;
  width: 100%;
  margin-left: 20px;
}
.button:hover {
  opacity: 0.9;
}
</style>
