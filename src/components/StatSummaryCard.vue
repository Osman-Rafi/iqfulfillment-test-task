<template>
  <b-card
    class="border-0 shadow-sm summary-card mb-3 me-md-3 me-lg-0"
    body-class="d-flex jutify-content-center align-items-center"
  >
    <div class="avatar-container p-4" :style="avatarStyle">
      <b-img :src="icon" width="32"></b-img>
    </div>
    <div class="ms-3">
      <p class="fs-7-5 fw-500 mb-0 text-black-50 mb-1">{{ title }}</p>
      <p class="fs-6 fw-7 mb-0">{{ value }}</p>
    </div>
  </b-card>
</template>

<script>
import { BCard, BImg } from "bootstrap-vue";
export default {
  name: "StatSummaryCard",
  components: {
    BCard,
    BImg,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    avatarbg: {
      type: String,
      default: "",
    },
  },
  computed: {
    avatarStyle() {
      return "background-color: " + this.avatarbg;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./statSummaryCard.scss";
</style>
