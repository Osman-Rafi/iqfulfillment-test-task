<template>
  <div>
    <b-button @click="toggleSidebar">
    toggle</b-button>
  </div>
</template>

<script>
import { BButton } from "bootstrap-vue";
export default {
  name: "HeaderComponent",
  components: {
    BButton,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    toggleSidebar() {
      this.$emit("toggleSidebar");
    },
  },
};
</script>

<style lang="scss" scoped></style>
