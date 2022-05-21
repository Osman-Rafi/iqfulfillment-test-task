<template>
  <div>
    <div class="d-flex justify-content-between">
      <div class="mt-4">
        <p class="mb-0 fw-7 fs-7">Poli Overview</p>
        <p class="fs-7-5 text-gray-100">Welcome, Barly</p>
      </div>
      <div class="mt-4">
        <b-button
          variant="primary"
          class="fs-7 px-4 py-2 register-patient-button"
        >
          + Register Patient
        </b-button>
      </div>
    </div>
    <b-row>
      <b-col lg="8">
        <div>
          <b-row>
            <b-col cols="12" md="6" xl="4">
              <StatSummaryCardVue
                :icon="maskIcon"
                title="Total Patients"
                value="24,908"
                avatarbg="#f0fbf8"
              />
            </b-col>
            <b-col cols="12" md="6" xl="4">
              <StatSummaryCardVue
                :icon="stethoIcon"
                title="Total Doctors"
                value="5,408"
                avatarbg="#fef6ee"
              />
            </b-col>
            <b-col cols="12" md="6" xl="4">
              <StatSummaryCardVue
                :icon="firstAidIcon"
                title="Total Staff"
                value="1,420"
                avatarbg="#e5f1ff"
              />
            </b-col>
          </b-row>
          <b-row class="ms-0 me-1">
            <b-col cols="12" class="mx-0 px-0">
              <covid-statistics />
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col cols="12" xl="6">
              <patients-by-gender />
            </b-col>
            <b-col cols="12" xl="6">
              <top-patients />
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BButton, BRow, BCol } from "bootstrap-vue";

import StatSummaryCardVue from "@/components/StatSummaryCard.vue";
import CovidStatistics from "@/views/overview/partials/CovidStatistics.vue";
import PatientsByGender from "./partials/PatientsByGender.vue";
import TopPatients from "./partials/TopPatients.vue";

import maskIcon from "@/assets/img/icons/medical-mask.png";
import firstAidIcon from "@/assets/img/icons/first-aid-kit.png";
import stethoIcon from "@/assets/img/icons/stethoscope.png";

export default {
  name: "OverviewComponent",
  components: {
    BButton,
    BRow,
    BCol,
    StatSummaryCardVue,
    CovidStatistics,
    PatientsByGender,
    TopPatients,
  },

  data() {
    return {
      maskIcon,
      firstAidIcon,
      stethoIcon,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./overview.scss";
</style>
