<template>
  <div class="nav-item-container" :class="activeted ? 'active-item' : ''">
    <div class="nav-item mb-2">
      <router-link :class="'nav-link text-gray-100'" :to="link">
        <i :class="'bi ' + icon"></i>
        <span class="ms-3">{{ title }}</span>
      </router-link>
    </div>
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
  computed: {
    activeted: function () {
      return this.$route.path === this.link;
    },
  },
};
</script>

<style lang="scss">
@import "./navItem.scss";
</style>
