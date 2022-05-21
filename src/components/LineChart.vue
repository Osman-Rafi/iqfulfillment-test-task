<template>
  <div>
    <apexchart
      type="area"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "LineChart",
  props: {
    series1: {
      type: Array,
      default: () => [],
    },
    series2: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: "series1",
          data: [...this.series1],
        },
        {
          name: "series2",
          data: [...this.series2],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "area",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: ["#4372dd", "#7ce6e6"],
          width: 2,
          dashArray: 0,
        },
        tooltip: {
          enabled: false,
        },
        grid: {
          show: true,
          borderColor: "#d8dbdb",
          strokeDashArray: 1,
          position: "front",
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 10,
          },
        },
        fill: {
          colors: ["#4372dd", "#7ce6e6"],
          opacity: 0.05,
          type: "solid",
        },
        markers: {
          size: 4,
          colors: ["#4372dd", "#7ce6e6"],
          strokeColor: "#fff",
        },
        labels: [
          
        ],
        legend: {
          show: false,
        },
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
