<template>
  <section class="pagination">
    <button class="pagination__first" @click="setActive((index = 1))">
      Первая
    </button>
    <button
      class="pagination__arrow pagination__arrow_previous"
      :disabled="active === 1"
      @click="goToPreviousPage"
    />
    <div class="pagination__digit-buttons">
      <div
        v-for="index in pagesCount"
        :key="index"
        @click="setActive(index)"
        :class="[
          'pagination__digit-button',
          {
            'pagination__digit-button_active': index === active,
          },
        ]"
      >
        {{ index }}
      </div>
    </div>
    <button
      class="pagination__arrow pagination__arrow_next"
      @click="goToNextPage"
      :disabled="active === pagesCount"
    ></button>
    <button class="pagination__last" @click="setActive((index = pagesCount))">
      Последняя
    </button>
  </section>
</template>
<!--TODO вынести логику сет актив в методыпш-->
<script>
export default {
  props: {
    totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  methods: {
    setActive(index) {
      this.active = index;
      this.$emit('onPageChanged', index);
    },
    goToNextPage() {
      this.setActive(this.active + 1);
    },
    goToPreviousPage() {
      this.setActive(this.active - 1);
    },
  },
};
</script>

<style scoped>
.pagination {
  max-width: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}

.pagination__first {
  max-width: 60px;
  font-size: 18px;
  font-weight: normal;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #a2a2a2;
}

.pagination__last {
  max-width: 60px;
  font-size: 18px;
  font-weight: normal;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #a2a2a2;
}

.pagination__arrow {
  width: 20px;
  height: 22px;
  border: none;
  box-sizing: border-box;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
}

.pagination__arrow_next {
  background-image: url('../static/arrow_next.svg');
}

.pagination__arrow_previous {
  background-image: url('../static/arrow_previous.svg');
}

.pagination__digit-buttons {
  display: flex;
  justify-content: center;
}

.pagination__digit-button {
  border: 2px blue;
  width: 58px;
  height: 58px;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination__digit-button:hover {
  background-color: #f4f4f4;
  transition: 0.2s;
}

.pagination__digit-button_active {
  background-color: pink;
  opacity: 0.5;
}
</style>
