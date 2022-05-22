<template>
  <div id="header" class="d-flex justify-content-between bg-white">
    <div class="d-flex">
      <b-button
        class="sidebar-toggler text-black ms-3"
        @click="toggleSidebar"
        variant="link"
        :pressed="null"
      >
        <i class="bi bi-list fs-3"></i>
      </b-button>
      <b-form-group class="ms-md-4 me-3 ms-3">
        <b-input-group class="mt-1">
          <b-input-group-prepend>
            <div class="search-box-prepend">
              <i class="bi bi-search text-gray-100"></i>
            </div>
          </b-input-group-prepend>
          <b-form-input
            size="sm"
            v-model="search"
            placeholder="Search..."
            class="search-box"
          />
          <b-input-group-append class="search-filter-toggler">
            <b-dropdown
              class="search-dropdown"
              toggle-class="search-dropdown-toggle-button"
            >
              <template #button-content>
                <span class="text-black fw-7 ls-1">
                  Filter
                  <i class="bi bi-chevron-down text-gray-100 ms-2"></i>
                </span>
              </template>
              <b-dropdown-item>An item</b-dropdown-item>
            </b-dropdown>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </div>
    <div class="mt-2 d-flex">
      <div
        class="mt-1 mt-md-2 me-3 notification-container d-flex align-items-center justify-content-center rounded-circle"
      >
        <i class="bi bi-bell"></i>
      </div>
      <div class="user-avatar-container d-flex me-3">
        <b-avatar
          variant="info"
          class="mx-3 mt-1"
          :src="require('../assets/img/profile_user.jpg')"
        ></b-avatar>
        <div class="mt-1 me-3 d-none d-md-block">
          <p class="mb-0 fs-7-5 fw-7">Barly Vallendito</p>
          <p class="fs-7-5 text-gray-100 mb-2">Admin Manager</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BButton,
  BFormGroup,
  BInputGroup,
  BFormInput,
  BInputGroupPrepend,
  BInputGroupAppend,
  BDropdown,
  BDropdownItem,
  BAvatar,
} from "bootstrap-vue";
export default {
  name: "HeaderComponent",
  components: {
    BButton,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BInputGroupAppend,
    BDropdown,
    BDropdownItem,
    BAvatar,
  },

  data() {
    return {
      search: "",
    };
  },

  mounted() {},

  methods: {
    toggleSidebar() {
      this.$emit("toggleSidebar");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./header.scss";
</style>

<style lang="scss">
.search-dropdown {
  height: 38px;
  .dropdown-toggle {
    background-color: #ffffff !important;
    border-color: #ced4da !important;
    border-radius: 0 18px 18px 0;
    font-size: 10px;

    &:hover,
    &:focus,
    &:active,
    &:active:focus,
    &:focus-visible {
      background-color: #ffffff;
      box-shadow: none;
      border-color: #ced4da;
    }
  }
}
.search-filter-toggler {
  margin-top: 8px;
}
</style>
