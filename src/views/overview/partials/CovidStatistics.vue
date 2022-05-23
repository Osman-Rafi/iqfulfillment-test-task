<template>
  <b-card class="card-shadow covid-stat">
    <div class="row justify-content-between">
      <div class="col-12 col-md-6">
        <p class="fs-7 fw-7" v-if="covidReport.title">
          {{ covidReport.title }}
        </p>
        <div v-if="covidReport.types" class="d-flex fs-7-5">
          <div class="graph-label me-2">
            <span class="positive"> {{ covidReport.types[0] }}</span>
          </div>
          <div class="graph-label">
            <span class="recovered">{{ covidReport.types[1] }}</span>
          </div>
        </div>
      </div>
      <div class="time-span-select col-12 col-md-6 mt-3 mt-lg-0 p-2 ms-2">
        <div class="time-span-select-btn active">Month</div>
        <div class="time-span-select-btn">Weekly</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <line-chart
          :series1="covidReport.values[0]"
          :series2="covidReport.values[1]"
          :xaxisCategories="covidReport.categories"
        ></line-chart>
      </div>
    </div>
  </b-card>
</template>

<script>
import { BCard } from "bootstrap-vue";
import LineChart from "@/components/LineChart.vue";

export default {
  name: "CovidStatistics",
  props: {
    covidReport: {
      required: true,
      default: () => ({
        title: "",
        types: [],
        values: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        categories: [],
      }),
    },
  },
  components: {
    BCard,
    LineChart,
  },
};
</script>

<style lang="scss">
@import "./covidStatistics.scss";
</style>
