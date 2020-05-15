<template>
  <div>
    <stories>
      <slot>
        <input-search>
          <button-search>Поиск</button-search>
        </input-search>
      </slot>
    </stories>
  </div>
</template>

<script>
import Stories from '@/components/Stories';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
export default {
  components: {
    stories: Stories,
    'button-search': Button,
    'input-search': Input,
  },
};
</script>

<style scoped></style>
