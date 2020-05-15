<template>
  <div class="porgressBar__double">
    <div class="progressBar__old">
      <div class="progressBar__old-fill" :style="styleOld"></div>
    </div>
    <div class="progressBar__new">
      <div
        class="progressBar__old-fill progressBar__old-fill-violet"
        :style="styleNew"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    oldValue: Number,
    newValue: Number,
    maxValue: Number,
  },
  computed: {
    styleOld() {
      return `width: ${(this.oldValue / this.maxValue) * 100}%`;
    },
    styleNew() {
      return `width: ${(this.newValue / this.maxValue) * 100}%`;
    },
  },
};
</script>

<style scoped>
.porgressBar__double {
  max-width: 208px;
}
.progressBar__old {
  max-width: 208px;
  min-height: 20px;
  position: relative;
}
.progressBar__new {
  max-width: 208px;
  min-height: 20px;
  position: relative;
}
.progressBar__old-fill {
  background: #f4f4f4;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.progressBar__old-fill-violet {
  background-color: #613a93;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
