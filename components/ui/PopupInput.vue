<template>
  <label class="input">
    {{ labelText }}
    <input
      class="input"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: ['labelText', 'type', 'placeholder', 'name', 'required'],
};
</script>

<style scoped>
.input {
  margin: 134px 40px 0;
  padding: 0;
  min-width: 840px;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}
</style>
