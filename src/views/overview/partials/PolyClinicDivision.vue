<template>
  <div>
    <b-card
      body-class="px-0"
      class="b-card card-shadow rounded-curve mt-3 mt-xxl-0"
    >
      <div class="d-flex justify-content-between mb-2 px-3">
        <p class="fs-7 fw-7 mb-lg-3s">Polyclinic Division</p>
        <b-button
          variant="link"
          size="sm"
          class="text-black-50 no-shadow button-dropdown"
        >
          <i class="bi bi-three-dots"></i>
        </b-button>
      </div>
      <div>
        <div class="d-flex mx-3 mb-2">
          <div class="p-3 rounded-15" style="background-color: #f0fbf8">
            <b-img
              :src="require('../../../assets/img/icons/tooth.png')"
              width="28"
            ></b-img>
          </div>
          <div class="ms-3">
            <p class="mb-1 fs-7-5 fw-7 mt-2">Dental Polyclinic</p>
            <p class="mb-1 fs-8 text-black-50 mt-2">Open: 7:00 - 11:00 AM</p>
          </div>
        </div>
        <div class="d-flex mx-3 mb-2">
          <div class="p-3 rounded-15" style="background-color: #f0fbf8">
            <b-img
              :src="require('../../../assets/img/icons/lungs.png')"
              width="28"
            ></b-img>
          </div>
          <div class="ms-3 mt-2">
            <p class="mb-1 fs-7-5 fw-7 mt-2">Cardiac Polyclinic</p>
            <p class="mb-1 fs-8 text-black-50 mt-2">Open 7:00 - 11:30 AM</p>
          </div>
        </div>
        <div class="d-flex mx-3 mb-2 mt-3">
          <div class="p-3 rounded-15" style="background-color: #f0fbf8">
            <b-img
              :src="require('../../../assets/img/icons/test-tube.png')"
              width="28"
            ></b-img>
          </div>
          <div class="ms-3">
            <p class="mb-1 fs-7-5 fw-7 mt-2">Radiology Polyclinic</p>
            <p class="mb-1 fs-8 text-black-50 mt-2">Open 7:00 - 11:00 AM</p>
          </div>
        </div>
      </div>
      <div class="mt-3 mt-lg-4 mb-lg-1 pt-lg-3">
        <b-button
          variant="success-light"
          class="fs-7-5 fw-500 py-3 mt-3 ms-4 me-4 see-more-button"
          >See More Polyclinic</b-button
        >
      </div>
    </b-card>
  </div>
</template>

<script>
import { BCard, BButton, BImg } from "bootstrap-vue";

export default {
  name: "PolyClinicDivision",
  components: {
    BCard,
    BButton,
    BImg,
  },
};
</script>

<style lang="scss" scoped>
@import "./polyclinicDivision.scss";
</style>
