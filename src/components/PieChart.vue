<template>
  <div>
    <apexchart
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "IqfulfillmentTestProjectPieChart",
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    chartSeries: {
      type: Array,
      default: () => [],
    },
    chartColors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      series: [...this.chartSeries],
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
            customScale: 1,
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

<style lang="scss" scoped></style>
