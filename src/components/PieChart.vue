<template>
  <div class="s">
    <apexchart
      type="donut"
      height="350px"
      width="200px"
      :options="chartOptions"
      :series="chartSeries"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "PieChart",
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    chartSeries: {
      default: () => [],
    },
    chartColors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "donut",
        },
        tooltip: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            size: "200px",
            customScale: 0.5,
            donut: {
              size: "75%",
            },
          },
        },
        stroke: {
          show: true,
          colors: "#f6fbff",
          width: 10,
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          //   colors: ["#016eff", "#e2eefe"],
          colors: [...this.chartColors],
        },
      },
    };
  },
};
</script>

<style lang="scss">
.apexcharts-canvas {
  display: flex !important;
  margin: auto !important;
}
</style>
