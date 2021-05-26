<template>
  <!-- <keep-alive> -->
  <teleport to="#app">
    <base-button>
      <template #first>
        First
      </template>
      <template #second>
        Second
      </template>
    </base-button>
  </teleport>
  <!-- </keep-alive> -->
</template>

<script>
import BaseButton from "../../common/components/BaseMenuButton";
export default {
  props: ["id"],
  components: {
    BaseButton,
  },
  created() {
    console.log("component created");
    console.log(`param: ${this.$route.params.id}`);
    console.log(`query: ${this.$route.query.test}`);
  },
};
</script>
