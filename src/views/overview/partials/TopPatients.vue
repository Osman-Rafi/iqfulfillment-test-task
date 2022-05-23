<template>
  <div>
    <b-card class="card-shadow rounded-curve mt-3 mt-lg-0">
      <p class="fs-7-5 fw-7">Top Patient By Group</p>
      <pie-chart
        :chartSeries="[55, 45, 25]"
        :chartColors="['#016eff', '#e2eefe', '#5fe1e0']"
      />
      <div class="d-flex">
        <div class="graph-label me-2">
          <span class="male"> Elderly</span>
        </div>
        <div class="graph-label me-2">
          <span class="female"> Adult</span>
        </div>
        <div class="graph-label me-2">
          <span class="female"> Child</span>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";
import PieChart from "@/components/PieChart.vue";

export default {
  name: "TopPatients",
  components: {
    BCard,
    PieChart,
  },
};
</script>

<style lang="scss" scoped>
@import "./patientsByGender.scss";
</style>
