<template>
  <div class="overlay" @click="$emit('overlayClick')">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.overlay {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
</style>
