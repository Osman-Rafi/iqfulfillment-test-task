<template>
  <div>
    <b-card class="card-shadow rounded-curve">
      <p class="fs-7-5 fw-7">Patient By Gender</p>
      <pie-chart
        :chartSeries="[55, 45]"
        :chartColors="['#016eff', '#e2eefe']"
      />
      <div class="d-flex mb-0 mt-0">
        <div class="graph-label me-2">
          <span class="male"> Female</span>
        </div>
        <div class="graph-label me-2">
          <span class="female"> Male</span>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";
import PieChart from "@/components/PieChart.vue";

export default {
  name: "PatientsByGender",
  components: {
    BCard,
    PieChart,
  },
};
</script>

<style lang="scss" scoped>
@import "./patientsByGender.scss";
</style>
