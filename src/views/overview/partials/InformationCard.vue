<template>
  <div>
    <b-card class="card-shadow rounded-curve mt-3 mt-xl-0">
      <div class="d-flex justify-content-between mb-2">
        <p class="fs-7 fw-7">Informations</p>
        <b-button
          variant="link"
          size="sm"
          class="text-black-50 no-shadow button-dropdown"
        >
          <i class="bi bi-three-dots"></i>
        </b-button>
      </div>
      <div>
        <b-dropdown
          id="dropdown-1"
          :text="monthSelected"
          toggle-class="month-select-dd-btn shadown-sm"
        >
          <b-dropdown-item v-for="(month, index) in months" :key="index">{{
            month
          }}</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="dragable-cal-container">
        <draggable-cal></draggable-cal>
      </div>
      <p class="fs-7 fw-7 appointment-title mb-4">Appointment list</p>
      <div class="mt-3">
        <div class="appointment-card-container card border-0 ms-2">
          <div class="appointment-card">
            <div class="d-flex mx-3 mb-2 mt-2">
              <div class="info-avatar-container p-3">
                <b-img :src="covidIcon" width="28"></b-img>
              </div>
              <div class="ms-3">
                <p class="mb-1 fs-7-5 fw-7">Covid Swab Test</p>
                <p class="mb-1 fs-8 text-black-50">8:00 AM - 4:00 PM</p>
                <p class="mb-0 fw-500 fs-8">120 Participants</p>
              </div>
            </div>
            <div class="ms-3 mb-2 mt-2 position-absolute">
              <div class="position-relative">
                <b-avatar
                  size="1.75rem"
                  v-for="(appointment, index) in appointments"
                  :key="index"
                  :style="apppointmentAvatarStyle(appointment.color, index)"
                  :text="appointment.text"
                ></b-avatar>
              </div>
            </div>
            <div class="my-4"></div>
            <div class="d-flex justify-content-end">
              <div class="info-card-footer-button">
                <i class="bi bi-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="appointment-card-container card border-0 ms-2 mt-3">
          <div class="appointment-card mb-3">
            <div class="d-flex mx-3 my-2">
              <div class="info-avatar-container p-3">
                <b-img :src="heartIcon" width="28"></b-img>
              </div>
              <div class="ms-3">
                <p class="mb-1 fs-7-5 fw-7">Covid Rapid Test</p>
                <p class="mb-1 fs-8 text-black-50">9:00 AM - 5:00 PM</p>
                <p class="mb-0 fw-500 fs-8">240 Participants</p>
              </div>
            </div>
            <div class="ms-3">
              <div class="position-absolute">
                <b-avatar
                  size="1.7rem"
                  v-for="(appointment, index) in appointments"
                  :key="index"
                  :style="apppointmentAvatarStyle(appointment.color, index)"
                  :text="appointment.text"
                ></b-avatar>
              </div>
            </div>
            <div class="my-4"></div>
            <div class="d-flex justify-content-end">
              <div class="info-card-footer-button">
                <i class="bi bi-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BButton,
  BImg,
  BAvatar,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";
import DraggableCal from "vue-draggable-cal";

import covidIcon from "@/assets/img/icons/bacteria.png";
import heartIcon from "@/assets/img/icons/heart-pulse.png";

export default {
  name: "InformationCard",
  components: {
    BCard,
    BButton,
    BImg,
    BAvatar,
    BDropdown,
    BDropdownItem,
    DraggableCal,
  },
  data() {
    return {
      covidIcon,
      heartIcon,
      appointments: [
        { text: "AK", color: "#66b2dd" },
        { text: "TV", color: "#5d3fc5" },
        { text: "ZA", color: "#3b76ef" },
        { text: "MB", color: "#dd66bb" },
        { text: "50+", color: "#1133ca" },
      ],
      monthSelected: "June",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  methods: {
    apppointmentAvatarStyle(bg, index) {
      const background = "background-color: " + bg + ";";
      const position =
        index === 0 ? "" : "position: absolute;  left:" + index * 19 + "px;";
      const color = "color: #fff;";
      return background + position + color;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./informationCard.scss";
</style>

<style lang="scss">
.cell-content {
  .day-number {
    color: #4e576e;
    font-weight: 500 !important;
    font-size: 13px !important;
  }
  .day {
    font-size: 9px !important;
    margin-top: 8px !important;
    margin-left: 1px !important;
  }
}
.cal-cell {
  border: none !important;
}
.cal-cell.today {
  .cell-content {
    &:before {
      content: "";
      background-color: #f2f8ff !important;
      width: 41px;
      height: 63px;
      left: 13px;
      position: absolute;
      bottom: 7px;
      border-radius: 39%;
    }

    .day-number {
      font-size: 13px !important;
      color: #2484ff !important;
      text-decoration: none !important;
      font-weight: 700 !important;
      &::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        background: #2484ff !important;
        border-radius: 50% !important;
        right: -2px;
        top: -2px;
      }
    }
    .day {
      font-weight: 700 !important;
      color: #2484ff !important;
    }
  }
}
.arrow {
  &::before {
    font-size: 19px !important;
    height: 2rem !important;
  }
  &:hover {
    box-shadow: none !important;
    background: none !important;
  }
  &.bottom {
    position: absolute !important;
    top: 18px !important;
    right: -5px !important;
  }
}
.months {
  display: none !important;
}
.dragable-cal-container {
  position: absolute;
  left: -27px;
  max-width: 111%;
  top: 80px;
}
.month-select-dd-btn {
  background: #ffff;
  color: #ebebeb;
  border-radius: 11px;
  border-color: #e6e1e1;
  &:hover,
  &:active,
  &.dropdown-toggle {
    background: #ffff !important;
    color: #6c757d !important;
    box-shadow: none !important;
  }
}
</style>
