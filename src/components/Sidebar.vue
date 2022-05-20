<template>
  <div
    class="navbar-nav sidebar shadow overflow-hidden"
    :class="{ 'sidebar-hidden': !showSidebar }"
  >
    <div class="h-100">
      <div class="vh-100 scroll-height d-flex flex-column">
        <div class="mb-auto">
          <!-- Sidebar brand -->
          <a
            href=""
            class="sidebar-brand d-flex align-items-center py-4 pe-4 ps-4 ms-1"
          >
            <img
              class="img-fluid"
              :src="require('../assets/img/brand-img.png')"
              alt="brand image"
              width="134"
            />
          </a>
          <!-- Sidebar items -->
          <div class="sidebar-items">
            <p class="text-uppercase text-gray-100 fs-7-5">managements</p>
            <div class="nav-items">
              <nav-item title="Overview" icon="bi-grid" :link="'/'" />
              <nav-item title="Statistics" icon="bi-bar-chart" :link="'/'" />
              <nav-item title="Patients" icon="bi-thermometer" :link="'/'" />
              <nav-item title="Polyclinic" icon="bi-clipboard" :link="'/'" />
              <nav-item title="Doctors" icon="bi-people" :link="'/'" />
              <nav-item title="Medicines" icon="bi-box" :link="'/'" />
            </div>
            <p class="text-uppercase text-gray-100 fs-7-5 mt-4">support</p>
            <div class="nav-items">
              <nav-item title="Messages" icon="bi-envelope" :link="'/'" />
              <nav-item title="Settings" icon="bi-gear" :link="'/'" />
            </div>
          </div>
        </div>
        <!-- Covid Information -->
        <div class="mt-3">
          <div class="covid-card-container card border-0 ms-4 mt-5">
            <div class="covid-info-card">
              <div class="card-body">
                <h3 class="fs-6 fw-7 mb-3">Covid Informations</h3>
                <p class="fs-7-5 text-primary fw-5">
                  <img
                    :src="require('../assets/img/icons/subway_world.png')"
                    alt="globe icon"
                    width="15"
                  />
                  <span class="ms-2">World</span>
                </p>
                <p class="fs-7-5">
                  Infected - <span class="fw-7">8.119.575</span>
                </p>
                <p class="fs-7-5">
                  Recovered - <span class="fw-7">4.231.974</span>
                </p>
                <p class="fs-7-5">
                  Infected - <span class="fw-7">439.217</span>
                </p>
                <button
                  class="check-btn btn btn-primary btn-block d-flex mx-auto px-4 py-2 mt-4"
                >
                  Check Covid
                </button>
              </div>
            </div>
          </div>
          <hr class="text-gray-100" />
          <div class="fs-7-5 mx-4">
            <p class="fw-7 mb-1">© Poli Clinic. 2020</p>
            <p class="text-gray-100">
              Poli Clinic is medical management for all doctors, patient &
              Staff.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  name: "SidebarComponent",
  components: {
    NavItem,
  },
  props: {
    showSidebar: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./sidebar.scss";
</style>
