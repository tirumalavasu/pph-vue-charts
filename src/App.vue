<template>
  <div id="app">
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import planetChartData from './charts/chart-data.js';
export default {
  data() {
    return {
      planetChartData: planetChartData,
    }
  },
  mounted() {
    this.createChart('planet-chart', this.planetChartData);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
      return myChart;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px;
  max-width: 1024px;
  margin: 0 auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
