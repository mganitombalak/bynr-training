<template>
  <!-- <keep-alive> -->
  <!-- <teleport to="#app">
    <base-button>
      <template #first>First</template>
      <template #second>Second</template>
    </base-button>
  </teleport> -->
  <!-- </keep-alive> -->
  <button @click="addPrice(10)">Add</button>
  <button @click="addPrice2">Bid</button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  props: ["id"],
  // data(){
  //   return {
  //     price:0
  //   }
  // },
  // computed:{
  //   price(){
  //     return this.$store.state.price
  //   }
  // },
  
  methods: {
    // addPrice() {
    //   this.$store.commit('addPrice',{newPrice:10});
    // },
    addPrice2() {
      // this.$store.commit('addPrice',{newPrice:30});
      this.$store.dispatch('pricing/addPrice',{newPrice:10});
      // console.dir(this.$store.state);
    },
    ...mapActions('pricing',['addPrice'])
  },
  created() {
    console.log("component created");
    console.log(`param: ${this.$route.params.id}`);
    console.log(`query: ${this.$route.query.test}`);
  },
};
</script>
