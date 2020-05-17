<template>
  <section class="story">
    <div class="story__intro">
      <div class="story__grid">
        <div class="story__grid-photo"></div>
        <div class="story__grid-quotation"></div>
        <div class="story__grid-info">
          <div class="story__grid__share"></div>
          <div class="story__grid__date"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.story__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px 1px;
}
.story__grid-photo {
  grid-area: 1 / 1 / 3 / 2;
}

.story__grid-quotation {
  grid-area: 1 / 2 / 2 / 3;
}

.story__grid__share {
  grid-area: 2 / 2 / 3 / 3;
}
</style>
