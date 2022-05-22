<template>
  <!-- page wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <Sidebar :showSidebar="showSidebar" @closeSidebar="closeSidebar" />
    <!-- Page content -->
    <div id="page-content" :class="{ 'sidebar-opened': showSidebar }">
      <!-- header -->
      <Header @toggleSidebar="toggleSidebar" />
      <!-- main content -->
      <main class="router-content">
        <div class="mx-4 px-2 mt-2">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "DashboardLayout",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    closeSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./dashboardLayout.scss";
</style>
