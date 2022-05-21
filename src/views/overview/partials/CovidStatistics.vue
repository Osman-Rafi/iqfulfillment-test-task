<template>
  <b-card class="card-shadow covid-stat">
    <div class="row justify-content-between">
      <div class="col-12 col-md-6">
        <p class="fs-7 fw-7">Patients Covid Statistics</p>
        <div class="d-flex fs-7-5">
          <div class="graph-label me-2">
            <span class="positive"> Positive Covid</span>
          </div>
          <div class="graph-label">
            <span class="recovered">Recovered Covid</span>
          </div>
        </div>
      </div>
      <div class="time-span-select col-12 col-md-6 mt-3 mt-lg-0 p-2 ms-2">
        <b-button class="time-span-select-btn active">Month</b-button>
        <b-button class="time-span-select-btn">Weekly</b-button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <line-chart
          :series1="[31, 40, 28, 51, 42, 109, 100, 28, 51, 42, 109, 100]"
          :series2="[11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 67, 34]"
          :labels="[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ]"
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
  components: {
    BCard,
    LineChart,
  },
};
</script>

<style lang="scss">
@import "./covidStatistics.scss";
</style>
