<template>
  <section class="statistics">
    <h2 class="statistics__title">Статистика по онкозаболеваниям</h2>
    <div class="statistics__container">
      <div class="facts__card">
        <h3 class="facts__description">
          Каждый 3-й в&nbsp;стране уверен, что рак неизлечим. А это примерно 48
          918 000 человек.
        </h3>
        <div class="facts__digit-container">
          <progress-bar :value="10" :maxValue="100" />
          <h2 class="facts__digit">1 из 3</h2>
          <h3 class="facts__source">Левада-Центр 2018</h3>
        </div>
      </div>

      <div class="facts__card">
        <h3 class="facts__description">2,6% Россиян имеют онкозаболевания.</h3>
        <div class="facts__digit-container">
          <progress-bar :value="3700000" :maxValue="146745098" />
          <h2 class="facts__digit">3 700 000</h2>
          <h3 class="facts__source">Росстат 2018</h3>
        </div>
      </div>

      <div class="facts__card">
        <h3 class="facts__description">
          На&nbsp;28% выросла доля выявления заболеваний на&nbsp;ранней стадии
          за&nbsp;10&nbsp;лет.
        </h3>
        <div class="facts__digit-container">
          <doubleprogress-bar :oldValue="68" :newValue="88" :maxValue="100" />
          <h2 class="facts__digit">↑28%</h2>
          <h3 class="facts__source">МНИОИ Герцена 2018</h3>
        </div>
      </div>

      <div class="facts__card">
        <h3 class="facts__description">
          На&nbsp;25% снизилась смертность в&nbsp;течение первого года после
          постановки диагноза.
        </h3>
        <div class="facts__digit-container">
          <doubleprogress-bar :oldValue="88" :newValue="68" :maxValue="100" />
          <h2 class="facts__digit">↓25%</h2>
          <h3 class="facts__source">МНИОИ Герцена 2018</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProgressBar from '@/components/ui/ProgressBar';
import DoubleProgressBar from '@/components/ui/DoubleProgressBar';
export default {
  components: {
    'progress-bar': ProgressBar,
    'doubleprogress-bar': DoubleProgressBar,
  },
};
</script>

<style scoped>
.statistics__title {
  max-width: 413px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 60px;
}

.statistics {
  max-width: 1340px;
  margin: 0 auto;
}

.container {
  margin: 30px auto;
  width: 90%;
}
.statistics__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1440px;
  margin: 30px auto;
  margin-bottom: 90px;
}

.facts__card {
  width: 300px;
  height: 300px;
  border: 1px solid #efefef;
  box-sizing: border-box;
  padding: 18px 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.facts__card :last-child {
  margin-right: 0px;
}
.facts__description {
  max-width: 260px;
  color: #000000;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 56px;
  display: flex;
  justify-content: flex-start;
}
.facts__description:last-child {
  margin-top: 10px;
  margin-bottom: 0px;
}
.facts__digit-container {
  max-width: 260px;
}
.facts__source {
  font-weight: 400;
  color: #666666;
  font-size: 12px;
  line-height: 16px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.facts__digit {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  color: #000000;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
