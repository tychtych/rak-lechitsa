<template>
  <div class="container">
    <h2 class="stories__title">Истории неизлечимых привычек</h2>
    <slot>
      <input-search>
        <button-search>Поиск</button-search>
      </input-search>
    </slot>
    <stories-grid />
  </div>
</template>

<script>
import StoriesGrid from '@/components/StoriesGrid';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
export default {
  components: {
    'stories-grid': StoriesGrid,
    'button-search': Button,
    'input-search': Input,
  },
};
</script>

<style scoped>
.container {
  max-width: 1320px;
  margin: 0 auto;
  padding-bottom: 100px;
  padding-top: 100px;
}
.stories__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 413px;
  padding-bottom: 70px;
}
</style>
