<template>
  <label class="textarea">
    {{ labelText }}
    <input :placeholder="placeholder" :name="name" :required="required" />
  </label>
</template>

<script>
export default {
  props: ['labelText', 'placeholder', 'name', 'required'],
};
</script>

<style scoped></style>
