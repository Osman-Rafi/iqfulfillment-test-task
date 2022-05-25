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
      <div class="d-flex">
        <div class="position-relative">
          <b-form-group class="ms-md-4 ms-3">
            <b-input-group class="mt-1">
              <b-input-group-prepend
                :class="{
                  'input-group-prepend-with-suggestions':
                    searchResults.length ||
                    (!searchResults.length && search && !searchApiLoading),
                }"
              >
                <div class="search-box-prepend">
                  <i class="bi bi-search text-gray-100"></i>
                </div>
              </b-input-group-prepend>
              <b-form-input
                size="sm"
                v-model="search"
                placeholder="Search..."
                class="search-box"
                @update="searchInput"
                @input="triggerInputChange"
                debounce="500"
              />
              <div class="search-loading-spinner">
                <b-spinner
                  v-if="searchApiLoading"
                  style="width: 1rem; height: 1rem"
                ></b-spinner>
              </div>
            </b-input-group>
          </b-form-group>
          <div class="mx-3 ms-md-4 search-suggestions">
            <template v-if="searchResults.length && search">
              <div class="search-result-container bg-white">
                <div
                  v-for="(result, index) in searchResults"
                  :key="index"
                  class="result-item"
                >
                  <p class="fs-8 px-3 text-black-50 mb-0 mt-2">{{ result }}</p>
                  <div class="px-3">
                    <hr v-if="index !== searchResults.length - 1" />
                    <div v-else class="pb-2"></div>
                  </div>
                </div>
              </div>
            </template>
            <template
              v-else-if="!searchResults.length && search && !searchApiLoading"
            >
              <div class="search-result-container bg-white">
                <div class="result-item">
                  <p class="fs-8 px-3 text-black-50 mb-1 mt-2">
                    No items found
                  </p>
                </div>
              </div>
            </template>
          </div>
          <!-- <b-input-group-append class="search-filter-toggler">
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
          </b-input-group-append> -->
        </div>
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
      </div>
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
import axios from "axios";
import {
  BButton,
  BFormGroup,
  BInputGroup,
  BFormInput,
  BInputGroupPrepend,
  // BInputGroupAppend,
  BDropdown,
  BDropdownItem,
  BAvatar,
  BSpinner,
} from "bootstrap-vue";
export default {
  name: "HeaderComponent",
  components: {
    BButton,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    // BInputGroupAppend,
    BDropdown,
    BDropdownItem,
    BAvatar,
    BSpinner,
  },

  data() {
    return {
      search: "",
      searchResults: [],
      searchApiLoading: false,
    };
  },

  methods: {
    toggleSidebar() {
      this.$emit("toggleSidebar");
    },
    async searchInput() {
      this.searchApiLoading = true;

      if (this.search.length >= 2) {
        try {
          const response = await axios.post(
            "https://apitest.iqfulfillment.com/v1/test/search",
            { q: this.search }
          );
          this.searchResults = response.data.results;
        } catch (error) {
          console.log(error);
        } finally {
          this.searchApiLoading = false;
        }
      } else {
        this.searchResults = [];
        this.searchApiLoading = false;
      }
    },
    triggerInputChange() {
      this.searchApiLoading = !this.searchApiLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./header-scoped.scss";
</style>

<style lang="scss">
@import "./header-global.scss";
</style>
