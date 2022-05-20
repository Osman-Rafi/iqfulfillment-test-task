<template>
  <div class="nav-item mb-2">
    <a :class="'nav-link text-gray-100'" href="">
      <i :class="'bi ' + icon"></i>
      <span class="ms-3">{{ title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProjectNavItem",
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
      default: "/",
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  color: #121f3e66 !important;
}
.nav-link.active {
  color: #0075ff !important;
  font-weight: 500;
}
.nav-item {
  font-weight: 500;
}
</style>
