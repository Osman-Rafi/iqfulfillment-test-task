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
  </div>
</template>

<script>
import { BButton } from "bootstrap-vue";
export default {
  name: "OverviewComponent",
  components: {
    BButton,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./overview.scss";
</style>
