<template>
  <div>{{ productName }}</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      productName: "",
    };
  },
  mounted() {
    axios.get("product/" + this.$route.params.productId).then((r) => {
      // console.log(r);
      this.productName = r.data.productName;
    });
    // .catch(e=>console.log(e));
  },
  //   computed: {
  //     productName() {
  //       return this.$route.params.productName;
  //     },
  //   },
};
</script>
