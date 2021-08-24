<template>
    <ul v-if="basketItems.length > 0">
      <li
        v-for="(basketItem, index) in basketItems"
        :key="'basketItem-' + index"
      >
        {{ basketItem.name }} - {{ basketItem.qty }}
      </li>
    </ul>
    <div v-if="basketItems.length <= 0">
      <span>Sepetinizde henuz urun yok</span>
      <!-- <p data-test-id="test-1">Sepetinizde henuz urun yok</p> -->
      <router-link v-if="basketItems.length <= 0" :to="'/shop'">Alisverise devam edin!</router-link>
    </div>
    <div id="commError" v-if="hasError">It is not you. It is Us! Sorry :(</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      basketItems: [],
      hasError: false,
    };
  },
  mounted() {
    axios
      .post("/basket", {
        headers: { Authorization: "Bearer" + localStorage.getItem("token") },
      })
      .then((result) => (this.basketItems = result.data.items))
      .catch((e) => (this.hasError = true));
  },
};
</script>
