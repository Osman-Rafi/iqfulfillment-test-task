<template>
  <div>
    <b-card class="card-shadow rounded-curve">
      <p class="fs-7-5 fw-7">{{ reportByGender.title }}</p>
      <pie-chart
        :chartSeries="reportByGender.values"
        :chartColors="['#016eff', '#e2eefe']"
      />
      <div class="d-flex mb-0 mt-0" v-if="reportByGender.types">
        <div class="graph-label me-2">
          <span class="male"> {{ reportByGender.types[1] }}</span>
        </div>
        <div class="graph-label me-2">
          <span class="female"> {{ reportByGender.types[0] }}</span>
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
  props: {
    reportByGender: {
      required: true,
      default: () => ({
        title: "",
        types: [],
        values: [0, 0],
      }),
    },
  },
  components: {
    BCard,
    PieChart,
  },
};
</script>

<style lang="scss" scoped>
@import "./patientsByGender.scss";
</style>
