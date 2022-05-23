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
      <b-col xl="8">
        <div>
          <b-row>
            <b-col
              cols="12"
              md="6"
              xl="4"
              v-for="(data, index) in counterCardsData"
              :key="index"
            >
              <StatSummaryCardVue
                :icon="data.icon"
                :title="data.title"
                :value="data.value"
                :avatarbg="data.avatarbg"
              />
            </b-col>
          </b-row>
          <b-row class="ms-0 me-1">
            <b-col cols="12" class="mx-0 px-0">
              <covid-statistics v-if="covidReport" :covidReport="covidReport" />
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col xl="4" class="mb-4">
        <information-card />
      </b-col>
    </b-row>
    <b-row class="pb-3">
      <b-col cols="12" class="col-xxl-8">
        <b-row>
          <b-col cols="12" lg="6">
            <patients-by-gender
              v-if="reportByGender"
              :reportByGender="reportByGender"
            />
          </b-col>
          <b-col cols="12" lg="6">
            <top-patients v-if="reportByGroup" :reportByGroup="reportByGroup" />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" class="col-xxl-4">
        <poly-clinic-division />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import { BButton, BRow, BCol } from "bootstrap-vue";

import StatSummaryCardVue from "@/components/StatSummaryCard.vue";
import CovidStatistics from "@/views/overview/partials/CovidStatistics.vue";
import PatientsByGender from "./partials/PatientsByGender.vue";
import TopPatients from "./partials/TopPatients.vue";
import InformationCard from "./partials/InformationCard.vue";
import PolyClinicDivision from "./partials/PolyClinicDivision.vue";

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
    InformationCard,
    PolyClinicDivision,
  },

  data() {
    return {
      data: {},
      counterCardsData: [],
      covidReport: null,
      reportByGender: null,
      reportByGroup: null,
    };
  },
  methods: {
    setCounterCards() {
      const data = this.data.counters;
      const icons = [
        "medical-mask.png",
        "stethoscope.png",
        "first-aid-kit.png",
      ];
      const bgColors = ["#f0fbf8", "#fef6ee", "#e5f1ff"];

      this.counterCardsData = data.map((item, index) => ({
        icon: icons[index],
        title: item.title,
        value: item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        avatarbg: bgColors[index],
      }));
    },
  },
  async mounted() {
    try {
      const url = "https://apitest.iqfulfillment.com/v1/test/dashboard";
      const res = await axios.get(url);
      this.data = res.data;

      await this.setCounterCards();
      this.covidReport = this.data.covid_report;
      this.reportByGender = this.data.report_by_gender[0];
      this.reportByGroup = this.data.report_by_group[0];
    } catch (error) {
      alert("Something went wrong with API.");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./overview.scss";
</style>
