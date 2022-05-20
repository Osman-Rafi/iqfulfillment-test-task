<template>
  <!-- page wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <Sidebar :showSidebar="showSidebar" />

    <!-- Page content -->
    <div id="page-content">
      <!-- header -->
      <Header @toggleSidebar="toggleSidebar" />
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
      showSidebar: true,
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
