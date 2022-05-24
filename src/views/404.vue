<template>
  <div>
    <b-row class="mt-3">
      <b-col>
        <b-img
          :src="require('../assets/img/not-found.jpg')"
          class="w-100 mt-4"
        ></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BImg } from "bootstrap-vue";
export default {
  name: "NotFound",

  components: {
    BImg,
    BRow,
    BCol,
  },
};
</script>

<style lang="scss" scoped></style>
