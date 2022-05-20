<template>
  <!-- page wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <Sidebar :showSidebar="showSidebar" />
    <!-- Page content -->
    <div id="page-content">
      <!-- header -->
      <Header @toggleSidebar="toggleSidebar" />
      <!-- main content -->
      <main>
        <router-view />
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
  },
};
</script>

<style scoped lang="scss">
@import "./dashboardLayout.scss";
</style>
