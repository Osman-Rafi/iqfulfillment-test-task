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
        <div class="d-flex">
          <b-row>
            <b-col cols="12" sm="8" md="6" xl="4">
              <StatSummaryCardVue
                :icon="maskIcon"
                title="Total Patients"
                value="24,908"
                avatarbg="#f0fbf8"
              />
            </b-col>
            <b-col cols="12" sm="8" md="6" xl="4">
              <StatSummaryCardVue
                :icon="stethoIcon"
                title="Total Doctors"
                value="5,408"
                avatarbg="#fef6ee"
              />
            </b-col>
            <b-col cols="12" sm="8" md="6" xl="4">
              <StatSummaryCardVue
                :icon="firstAidIcon"
                title="Total Staff"
                value="1,420"
                avatarbg="#e5f1ff"
              />
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
