<template>
  <div class="progressBar">
    <div class="progressBar__fill" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    maxValue: Number,
  },
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%`;
    },
  },
};
</script>

<style scoped>
.progressBar {
  max-width: 260px;
  min-height: 40px;
  background-color: #f4f4f4;
  display: flex;
  position: relative;
}
.progressBar__fill {
  background-color: #613a93;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}
</style>
