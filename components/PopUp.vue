<template>
  <div class="popup">
    <img
      src="../static/close-icon.svg"
      alt
      class="close-icon"
      @click="$emit('closePopup')"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.popup {
  min-width: 920px;
  background-color: #ffffff;
  min-height: 324px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.close-icon {
  position: absolute;
  top: 35px;
  right: 35px;
}
@media screen and (max-width: 1281px) {
  .popup {
    min-width: 800px;
  }
}
@media screen and (max-width: 769px) {
  .popup {
    min-width: 580px;
  }
}
@media screen and (max-width: 321px) {
  .popup {
    min-width: 290px;
    min-height: 191px;
  }
  .close-icon {
    top: 13px;
    right: 12px;
  }
}
</style>
